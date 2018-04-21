//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';

const collection = new Mongo.Collection("output");


Template.ActiveRepositories.onCreated(function () {
});


//TODO bind data to chart after retrieve all data
Template.ActiveRepositories.onRendered(function () {
    Meteor.subscribe('languages', {
        onReady: function () {
            let results = collection.find({language: "javascript"}, {sort: {time: 1}});
            results.forEach((result) => {
                console.log(`time: ${result.time}, language: ${result.language}, score: ${result.score}`);
            });
            let times = [];
            let scores = [];
            results.forEach((result) => {
                times.push(result.time);
                scores.push(result.score);
            });

            console.log(times.length);
            console.log(scores.length);

            let ctx = document.getElementById("Active-Repos");

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: times,
                    datasets: [{
                        data: scores,
                        label: "javascript",
                        borderColor: "#3e95cd",
                        fill: false
                    }]
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