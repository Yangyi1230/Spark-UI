//Author: Hao Chen


import {Mongo} from 'meteor/mongo'
import {getTableData} from "./table_data_generator";
import {
    issueCollection,
    languageCollection, postCollection,
    prCollection,
    pushCollection,
    starCollection
} from "./collections";

const tableCollection = new Mongo.Collection(null);

Template.Table.onCreated(function () {
    console.log(FlowRouter.getRouteName());
    let tableName, collection;
    switch (FlowRouter.getRouteName()) {
        case 'overall': {
            tableName = "languageTable";
            collection = languageCollection;
            break;
        }
        case 'issue' : {
            tableName = "issueTable";
            collection = issueCollection;
            break;
        }
        case 'github_pull_request' : {
            tableName = "prTable";
            collection = prCollection;
            break
        }
        case 'github_push' : {
            tableName = "pushTable";
            collection = pushCollection;
            break
        }
        case 'github_star' : {
            tableName = "starTable";
            collection = starCollection;
            break
        }
        case 'post' : {
            tableName = "postTable";
            collection = postCollection;
            break
        }

    }
    Meteor.subscribe(tableName, {
        onReady: function () {
            tableCollection.remove({});
            let time = "20181";
            let tableData = getTableData(time, collection);
            tableData.forEach((obj, idx) => {
                tableCollection.insert({
                    "ranking": idx + 1,
                    "language": obj.language,
                    "percentage": obj.score,
                    "change": obj.change,
                    "trend": obj.trend
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
                rowsPerPage: 40,
                showFilter: false,
                fields: [
                    {key: 'ranking', label: ' # ranking'},
                    {key: 'language', label: 'language'},
                    {key: 'percentage', label: 'score'},
                    {key: 'change', label: 'change'},
                    {key: 'trend', label: 'trend (%)'}
                ]
            }
        }
    }
);

Template.Table.events({
    'change select'(event) {
        let collection;

        switch (FlowRouter.getRouteName()) {
            case 'overall': {
                collection = languageCollection;
                break;
            }
            case 'issue' : {
                collection = issueCollection;
                break;
            }
            case 'github_pull_request' : {
                collection = prCollection;
                break
            }
            case 'github_push' : {
                collection = pushCollection;
                break
            }
            case 'github_star' : {
                collection = starCollection;
                break
            }
            case 'post' : {
                collection = postCollection;
                break
            }

        }

        let select = event.target;
        tableCollection.remove({});

        let yearSelect = document.getElementById("year-select");
        let quarterSelect = document.getElementById("quarter-select");

        let year = yearSelect.options[yearSelect.selectedIndex].value;
        let quarter = quarterSelect.options[quarterSelect.selectedIndex].value;


        let time = year + quarter;

        console.log(time);

        let tableData = getTableData(time, collection);


        tableData.forEach((obj, idx) => {
            tableCollection.insert({
                "ranking": idx + 1,
                "language": obj.language,
                "percentage": obj.score,
                "change": obj.change,
                "trend": obj.trend
            });
        });
    }
});



