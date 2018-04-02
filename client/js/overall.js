//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';

Template.Overall.onRendered(function () {
    var ctxPL = document.getElementById("Overall-PL");
    var ctxTech = document.getElementById("Overall-Tech");
    //TODO: Dynamically load data from database
    var chartPL = new Chart(ctxPL, {
        type: 'line',
        data: {
            labels: ['16/Q1', '16/Q2', '16/Q3', '16/Q4', '17/Q1', '17/Q2', '17/Q3', '17/Q4'],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221],
                label: "C++",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [78, 34, 56, 12, 67, 94, 178, 132],
                label: "C",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547],
                label: "Java",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167],
                label: "Scala",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                label: "Python",
                borderColor: "#c45850",
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
    var chartTech = new Chart(ctxTech, {
        type: 'line',
        data: {
            labels: ['16/Q1', '16/Q2', '16/Q3', '16/Q4', '17/Q1', '17/Q2', '17/Q3', '17/Q4'],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221],
                label: "Node.js",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [78, 34, 56, 12, 67, 94, 178, 132],
                label: "Docker",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547],
                label: "Tensorflow",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167],
                label: "React",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                label: "Vue",
                borderColor: "#c45850",
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
});