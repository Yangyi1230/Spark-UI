import Chart from '../../node_modules/chart.js/src/chart';
import {getGraphData} from "./graph_data_generator";
import {issueCollection} from "./collections";
import {timeList} from "./data";

Template.Overall.onRendered(function () {
    let graph = document.getElementById("issue_graph");
    Meteor.subscribe('issueTable', {
        onReady: function () {
            let results = issueCollection.find({});
            let data = getGraphData(results);

            new Chart(graph, {
                type: 'line',
                data: {
                    labels: timeList,
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