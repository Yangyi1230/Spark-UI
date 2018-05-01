//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';
import {getGraphData} from "./graph_data_generator";
import {languageCollection, techCollection} from "./collections";
import {timeList} from "./data";


Template.overall_content.onRendered(function () {

    Meteor.subscribe("techTable", {
        onReady: function () {
            let ctxTech = document.getElementById("tech_graph");

            let techResults = techCollection.find({});
            let techData = getGraphData(techResults);

            new Chart(ctxTech, {
                type: 'line',
                data: {
                    labels: techData.times,
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
                                labelString: 'Score'
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
            let ctxPL = document.getElementById("language_graph");

            let plResults = languageCollection.find({});
            let plData = getGraphData(plResults);


            new Chart(ctxPL, {
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
                                labelString: 'Score'
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