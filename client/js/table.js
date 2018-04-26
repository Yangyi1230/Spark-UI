//Author: Hao Chen


import {Mongo} from 'meteor/mongo'
import {collection} from "./collections";
import {languageList} from "./data";

const tableCollection = new Mongo.Collection(null);

Template.Table.onCreated(function () {
    Meteor.subscribe('languages', {
        onReady: function () {
            tableCollection.remove({});
            let pls = languageList;//programming language list
            //TODO load time from time List
            //TODO display time in specific month
            let end = 20181;
            let beg = 20174;
            let dataset = [];
            pls.forEach((pl) => {
                let nex = collection.findOne({language: pl, time: end});
                let cur = collection.findOne({language: pl, time: beg});
                //console.log(cur);
                //console.log(nex);

                let score = cur.score;
                let change = nex.score - cur.score;

                if (change >= 0)
                    change = "+" + change;

                dataset.push({language: pl, score: score, change: change});
            });

            function compare(a, b) {
                if (a.score < b.score)
                    return 1;
                if (a.score > b.score)
                    return -1;
                return 0;
            }

            dataset.sort(compare);

            dataset.forEach((obj, idx) => {
                //console.log(idx);
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
                showFilter: true,
                fields: [
                    {key: 'ranking', label: 'ranking'},
                    {key: 'language', label: 'language'},
                    {key: 'percentage', label: 'score'},
                    {key: 'change', label: 'change'}
                ]
            }
        }
    }
);