//Author: Hao Chen (2018)

import {colorPicker} from "./line_color";
import {timeList} from "./data";

function getGraphData(results) {
    let map = new Map(); //utilize map structure supported by ES6 (languages -> [{time, score}])

    results.forEach((result) => {
        //console.log(result.language);
        if (!map.has(result.language)) {
            map.set(result.language, []);
        }
        map.get(result.language).push({time: result.time, score: result.score});
    });

    let times = [];// retrieve labels
    let set = new Set();
    results.forEach((result) => {
        //TODO alter time format (now "20173")
        set.add(result.time);
    });

    set.forEach(time => times.push(time));

    times.sort();// sort times in ascending order

    //times.forEach(x => console.log(x));

    //comparator, sort array of object {time, score} based on time
    function compare(a, b) {
        if (parseInt(a.time) < parseInt(b.time))
            return -1;
        if (parseInt(a.time) > parseInt(b.time))
            return 1;
        return 0;
    }


    let languageList = [];
    // get top languages
    for (const pl of map.keys()) {
        map.get(pl).sort(compare);
        let objArray = map.get(pl);
        if (objArray.length === timeList.length)
            languageList.push({language: pl, score: objArray[objArray.length - 1].score});
    }

    languageList.sort((x1, x2) => (x2.score - x1.score));
    //languageList.forEach((x) => console.log(x.language + " " + x.score));


    languageList = languageList.slice(0, colorPicker.length);

    //final datasets, which including all lines, will be attached to Chart.data.datasets
    let plObjArray = [];


    let idx = 0;// cursor of colorPicker
    for (const pl of languageList) {
        let plObj = {};
        plObj.label = pl.language;
        let scores = [];
        map.get(pl.language).forEach(x => {
            scores.push(x.score);
        });

        plObj.data = scores;
        plObj.fill = false;
        plObj.borderColor = colorPicker[idx++];
        plObjArray.push(plObj)
    }


    return {obj: plObjArray, times: times};
}

export {getGraphData};