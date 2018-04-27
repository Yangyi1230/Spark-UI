//Author: Hao Chen (2018)

import {colorPicker} from "./line_color";
import {timeList} from "./data";

function getGraphData(results) {
    let map = new Map();//utilize map structure supported by ES6 (languages -> [{time, score}])

    results.forEach((result) => {
        if (!map.has(result.language)) {
            map.set(result.language, []);
        }
        //only collect data in the given time range
        if (result.time >= timeList[0] && result.time <= timeList[timeList.length - 1])
            map.get(result.language).push({time: result.time, score: result.score});
    });

    let times = [];// retrieve labels
    let set = new Set();
    results.forEach((result) => {
        //TODO alter time format (now "20173")
        set.add(result.time);
    });

    set.forEach(time => times.push(time));

    times.sort((a, b) => (a - b));// sort times in ascending order

    // console.log("time sequence");
    // times.forEach(time => console.log(time));

    //final datasets, which including all lines, will be attached to Chart.data.datasets
    let plObjArray = [];

    //comparator, sort array of object {time, score} based on time
    function compare(a, b) {
        if (a.time < b.time)
            return -1;
        if (a.time > b.time)
            return 1;
        return 0;
    }

    let idx = 0;// cursor of colorPicker
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
        plObj.borderColor = colorPicker[idx++];

        if (scores.length === timeList.length)
            plObjArray.push(plObj)
    }

    return {obj: plObjArray, times: times};
}

export {getGraphData};