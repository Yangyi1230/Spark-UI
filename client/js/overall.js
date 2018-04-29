//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';
import {getGraphData} from "./graph_data_generator";
import {languageCollection, techCollection} from "./collections";
import {timeList} from "./data";


Template.overall_content.onRendered(function () {
    let ctxTech = document.getElementById("Overall-Tech");
    let ctxPL = document.getElementById("Overall-PL");

    Meteor.subscribe("techTable", {
        onReady: function () {
            let techResults = techCollection.find({});
            let techData = getGraphData(techResults);

            new Chart(ctxTech, {
                type: 'line',
                data: {
                    labels: timeList,
                    datasets: techData.obj
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

    Meteor.subscribe("languageTable", {
        onReady: function () {
            let plResults = languageCollection.find({});
            let plData = getGraphData(plResults);

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
        },
        onError: function () {
            console.log("onError", arguments);
        }

    });
});