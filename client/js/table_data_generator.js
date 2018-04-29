import {timeList} from "./data";

function getTableData(time, collection) {
    let tableData = [];
    let idx = timeList.indexOf(time);
    let map = new Map();

    let languages = new Set();
    collection.find({}).forEach((result) => {
        //console.log(result.language);
        if (!map.has(result.language)) {
            map.set(result.language, []);
        }
        map.get(result.language).push({time: result.time});
    });


    for (const pl of map.keys()) {
        if (map.get(pl).length === timeList.length) {
            //console.log(pl);
            languages.add(pl);
        }
    }

    if (idx === 0) {
        let curTime = time;
        languages.forEach((pl) => {
            let cur = collection.findOne({language: pl, time: curTime});
            let score = parseFloat(cur.score.toFixed(2));
            let change = 0;
            let trend = 0;
            tableData.push({language: pl, score: score, change: change, trend: trend});
        });

    } else {
        let curTime = time;
        let preTime = timeList[idx - 1];
        languages.forEach((pl) => {
            let cur = collection.findOne({language: pl, time: curTime});
            let pre = collection.findOne({language: pl, time: preTime});
            //console.log(cur);
            let score = parseFloat(cur.score.toFixed(2));
            let change = parseFloat((cur.score - pre.score).toFixed(2));
            let trend = parseFloat((change * 100 / pre.score).toFixed(2));
            tableData.push({language: pl, score: score, change: change, trend: trend});
        });
    }

    function compare(a, b) {
        if (parseFloat(a.score) < parseFloat(b.score))
            return 1;
        if (parseFloat(a.score) > parseFloat(b.score))
            return -1;
        return 0;
    }

    tableData.sort(compare);
    return tableData;
}

export {getTableData};