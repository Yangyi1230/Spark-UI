//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';
import {getGraphData} from "./graph_data_generator";
import {techCollection} from "./collections";

Template.Issue.onRendered(function () {
    Meteor.subscribe('languages', {
        onReady: function () {
            //{ fruit: { $in: ['peach', 'plum', 'pear'] } }
            let pls = ["javascript", "python"];//programming language list

            let results = techCollection.find({language: {$in: pls}});

            let data = getGraphData(results);

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