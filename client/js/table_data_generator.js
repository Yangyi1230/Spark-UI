import {languageList, timeList} from "./data";
import {collection} from "./collections";

function getTableData(time) {
    let tableData = [];
    let idx = timeList.indexOf(time);
    console.log(idx);
    if (idx <= 0) return tableData;
    let end = time;
    let beg = timeList[idx - 1];


    //fixme add time range judgement
    languageList.forEach((pl) => {
        let nex = collection.findOne({language: pl, time: end});
        let cur = collection.findOne({language: pl, time: beg});

        let score = cur.score;
        let change = nex.score - cur.score;

        if (change >= 0)
            change = "+" + change;

        tableData.push({language: pl, score: score, change: change});
    });

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