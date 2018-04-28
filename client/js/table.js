//Author: Hao Chen


import {Mongo} from 'meteor/mongo'
import {getTableData} from "./table_data_generator";

const tableCollection = new Mongo.Collection(null);

Template.Table.onCreated(function () {
    Router.get('tableName');
    Meteor.subscribe('languages', {
        onReady: function () {
            tableCollection.remove({});
            let time = 20181;
            let tableData = getTableData(time);
            tableData.forEach((obj, idx) => {
                tableCollection.insert({
                    "ranking": idx + 1,
                    "language": obj.language,
                    "percentage": obj.score,
                    "change": obj.change
                });
            });
        },
        onError: function () {
            console.log("onError", arguments);
        }

    });
});


Template.Table.helpers({
        settings: function () {
            return {
                collection: tableCollection,
                rowsPerPage: 20,
                showFilter: false,
                fields: [
                    {key: 'ranking', label: ' # ranking'},
                    {key: 'language', label: 'language'},
                    {key: 'percentage', label: 'score'},
                    {key: 'change', label: 'change'}
                ]
            }
        }
    }
);

Template.Table.events({
    'change select'(event) {
        let select = event.target;
        tableCollection.remove({});

        let yearSelect = document.getElementById("year-select");
        let quarterSelect = document.getElementById("quarter-select");

        let year = yearSelect.options[yearSelect.selectedIndex].value;
        let quarter = quarterSelect.options[quarterSelect.selectedIndex].value;


        let time = parseInt(year + quarter);

        console.log(time);

        let tableData = getTableData(time);

        tableData.forEach((obj, idx) => {
            tableCollection.insert({
                "ranking": idx + 1,
                "language": obj.language,
                "percentage": obj.score,
                "change": obj.change
            });
        });
    }
});



