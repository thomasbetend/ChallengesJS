'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

function calcTip (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}

for (let i = 0; i < bills.length; i++) {
    totals.push(calcTip(bills[i]) + bills[i]);
}

function calcAverage (array) {
    let sumArray = array.reduce((a, b) => a + b);

    return sumArray / array.length;
}

console.log(tips);
console.log(totals);
console.log(calcAverage(totals));