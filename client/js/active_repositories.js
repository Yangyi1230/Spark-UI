//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import Chart from '../../node_modules/chart.js/src/chart';

const collection = new Mongo.Collection("output");

//TODO generate lines for multiple languages automatically
//TODO ideas -> 1. query multiple languages at a time 2.classify languages using JS
Template.ActiveRepositories.onRendered(function () {
    Meteor.subscribe('languages', {
        onReady: function () {
            //{ fruit: { $in: ['peach', 'plum', 'pear'] } }
            let pls = ["javascript", "python"];//programming language list

            let results = collection.find({language: {$in: pls}});

            let map = new Map();//utilize map structure supported by ES6 (languages -> [{time, score}])

            results.forEach((result) => {
                if (!map.has(result.language)) {
                    map.set(result.language, []);
                }
                map.get(result.language).push({time: result.time, score: result.score});
                console.log(`time: ${result.time}, language: ${result.language}, score: ${result.score}`);
            });

            let times = [];// retrieve labels
            let set = new Set();
            results.forEach((result) => {
                //TODO alter time format (now "20173")
                set.add(result.time);
            });

            set.forEach(time => times.push(time));

            times.sort((a, b) => (a - b));// sort times in ascending order

            console.log("time sequence");
            times.forEach(time => console.log(time));

            //final datasets, whichincluding all lines, will be attached to Chart.data.datasets
            let plObjArray = [];

            //comparator, sort array of object {time, score} based on time
            function compare(a, b) {
                if (a.time < b.time)
                    return -1;
                if (a.time > b.time)
                    return 1;
                return 0;
            }

            for (const pl of map.keys()) {
                let plObj = {};
                plObj.label = pl;
                let scores = [];
                map.get(pl).sort(compare);
                map.get(pl).forEach(x => {
                    scores.push(x.score);
                });

                plObj.data = scores;
                plObj.fill = false;
                //TODO retrieve color from color list
                plObj.borderColor = "#3e95cd";
                plObjArray.push(plObj)
            }


            let ctx = document.getElementById("Active-Repos");

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: times,
                    datasets: plObjArray
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