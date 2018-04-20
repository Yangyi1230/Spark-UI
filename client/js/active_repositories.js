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




//TODO: Dynamically load data from database
Template.ActiveRepositories.onCreated(function () {
    const languages = new Mongo.Collection("output");
    this.autorun(() => {
        this.subscribe('languages');
        let results = languages.find();
        results.forEach((result) => {
            console.log(`time: ${result.time}, language: ${result.language}, score: ${result.score}`);
        });
    });


    // let ctx = document.getElementById("Active-Repos");
    //
    // let myChart = new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //         labels: ['16/Q1', '16/Q2', '16/Q3', '16/Q4', '17/Q1', '17/Q2', '17/Q3', '17/Q4'],
    //         datasets: [{
    //             data: [86, 114, 106, 106, 107, 111, 133, 221],
    //             label: "C++",
    //             borderColor: "#3e95cd",
    //             fill: false
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: false,
    //         },
    //         scales: {
    //             yAxes: [{
    //                 scaleLabel: {
    //                     display: true,
    //                     labelString: '# of active repos'
    //                 }
    //             }]
    //         }
    //     }
    // });
});