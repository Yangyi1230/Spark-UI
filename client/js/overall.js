//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';
import {getDataset} from "./graph_data_generator";
import {collection} from "./collections";
//const collection = new Mongo.Collection("output");

Template.Overall.onRendered(function () {
    let ctxPL = document.getElementById("Overall-PL");
    let ctxTech = document.getElementById("Overall-Tech");
    Meteor.subscribe('languages', {
        onReady: function () {
            let pls = ["javascript", "python"];//programming language list
            let results = collection.find({language: {$in: pls}});
            let data = getDataset(results);

            new Chart(ctxPL, {
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

            new Chart(ctxTech, {
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