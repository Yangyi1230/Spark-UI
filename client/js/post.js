import Chart from '../../node_modules/chart.js/src/chart';
import {getGraphData} from "./graph_data_generator";
import {postCollection} from "./collections";

Template.post_content.onRendered(function () {
    let graph = document.getElementById("post_graph");
    Meteor.subscribe('postTable', {
        onReady: function () {
            let results = postCollection.find({});
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