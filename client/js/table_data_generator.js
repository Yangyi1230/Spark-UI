import {timeList} from "./data";

function getTableData(time, collection) {
    let tableData = [];
    let idx = timeList.indexOf(time);

    let languages = new Set();
    collection.find({}).forEach(x => {
        console.log(x.language + " " + x.time);
        languages.add(x.language);
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
            console.log(cur);
            let score = cur.score.toFixed(2);
            let change = (cur.score - pre.score).toFixed(2);

            if (change >= 0)
                change = "+" + change;

            tableData.push({language: pl, score: score, change: change});
        });
    }

    function compare(a, b) {
        if (parseInt(a.score) < parseInt(b.score))
            return 1;
        if (parseInt(a.score) > parseInt(b.score))
            return -1;
        return 0;
    }

    tableData.sort(compare);
    return tableData;
}

export {getTableData};