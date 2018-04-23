//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';
import {getDataset} from "./graph_data_generator";
import {collection} from "./collections";

Template.ActiveRepositories.onRendered(function () {
    Meteor.subscribe('languages', {
        onReady: function () {
            //{ fruit: { $in: ['peach', 'plum', 'pear'] } }
            let pls = ["javascript", "python"];//programming language list

            let results = collection.find({language: {$in: pls}});

            let data = getDataset(results);

            let ctx = document.getElementById("Active-Repos");

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.times,
                    datasets: data.obj
                },
                options: {
                    title: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Overall Rating'
                            }
                        }]
                    }
                }
            });
        },
        onError: function () {
            console.log("onError", arguments);
        }
    });
});