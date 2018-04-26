//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';
import {getDataset} from "./graph_data_generator";
import {collection} from "./collections";
import {languageList, timeList} from "./data";

Template.Overall.onRendered(function () {
    let ctxPL = document.getElementById("Overall-PL");
    let ctxTech = document.getElementById("Overall-Tech");
    Meteor.subscribe('languages', {
        onReady: function () {

            let plResults = collection.find({language: {$in: languageList}});
            let plData = getDataset(plResults);

            new Chart(ctxPL, {
                type: 'line',
                data: {
                    labels: timeList,
                    datasets: plData.obj
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
                    labels: plData.times,
                    datasets: plData.obj
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