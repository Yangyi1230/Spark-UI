//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';


// const handle = Meteor.subscribe('collection');
//
// Tracker.autorun(() => {
//     const isReady = handle.ready();
//     if (isReady) {
//         let results = handle.find({"language": "javascript"});
//         results.forEach((result) => {
//             console.log(`time: ${result.time}, language: ${result.language}, score: ${result.score}`);
//         });
//     }
// });


const collection = new Mongo.Collection("output");

//TODO bind data to chart after retrieve all data
Template.ActiveRepositories.onCreated(function () {
    this.autorun(() => {
        this.subscribe('languages');
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

        let ctx = document.getElementById("Active-Repos");

        let myChart = new Chart(ctx, {
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
                            labelString: '# of active repos'
                        }
                    }]
                }
            }
        });
    });
});