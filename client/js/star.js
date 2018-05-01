import Chart from '../../node_modules/chart.js/src/chart';
import {getGraphData} from "./graph_data_generator";
import {starCollection} from "./collections";
import {timeList} from "./data";

Template.star_content.onRendered(function () {
    let graph = document.getElementById("star_graph");
    Meteor.subscribe('starTable', {
        onReady: function () {
            let results = starCollection.find({});
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