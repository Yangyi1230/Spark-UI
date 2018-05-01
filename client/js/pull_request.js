import Chart from '../../node_modules/chart.js/src/chart';
import {getGraphData} from "./graph_data_generator";
import {prCollection} from "./collections";
import {timeList} from "./data";

Template.pull_request_content.onRendered(function () {
    let graph = document.getElementById("pull_request_graph");
    Meteor.subscribe('prTable', {
        onReady: function () {
            let results = prCollection.find({});
            let data = getGraphData(results);

            new Chart(graph, {
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