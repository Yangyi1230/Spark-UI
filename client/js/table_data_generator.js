import {timeList} from "./data";

function getTableData(time, collection) {
    let tableData = [];
    let idx = timeList.indexOf(time);

    let languages = new Set();
    collection.find({}).forEach(x => {
        languages.add(x.language);
        console.log(x.time);
    });

    if (idx === 0) {
        let curTime = time;
        languages.forEach((pl) => {
            let cur = collection.findOne({language: pl, time: curTime});
            let score = cur.score.toFixed(2);
            let change = "";
            tableData.push({language: pl, score: score, change: change});
        });

    } else {
        let curTime = time;
        let preTime = timeList[idx - 1];
        languages.forEach((pl) => {
            let cur = collection.findOne({language: pl, time: curTime});
            let pre = collection.findOne({language: pl, time: preTime});
            //fixme language cannot be found
            //console.log(cur.language);
            console.log(cur.language);

            let score = cur.score.toFixed(2);
            let change = (cur.score - pre.score).toFixed(2);

            if (change >= 0)
                change = "+" + change;

            tableData.push({language: pl, score: score, change: change});
        });
    }

    function compare(a, b) {
        if (a.score < b.score)
            return 1;
        if (a.score > b.score)
            return -1;
        return 0;
    }

    tableData.sort(compare);
    return tableData;
}

export {getTableData};