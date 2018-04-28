import {languageList, timeList} from "./data";
import {techCollection} from "./collections";

function getTableData(time) {
    let tableData = [];
    let idx = timeList.indexOf(time);
    console.log(idx);
    if (idx === 0) {
        let curTime = time;
        languageList.forEach((pl) => {
            let cur = techCollection.findOne({language: pl, time: curTime});
            let score = cur.score.toFixed(2);
            let change = "";
            tableData.push({language: pl, score: score, change: change});
        });

    } else {
        let curTime = time;
        let preTime = timeList[idx - 1];
        languageList.forEach((pl) => {
            let cur = techCollection.findOne({language: pl, time: curTime});
            let pre = techCollection.findOne({language: pl, time: preTime});

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