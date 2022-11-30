'use strict';

function calcTip (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

const bills = [125, 555, 44];

let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}

for (let i = 0; i < bills.length; i++) {
    totals.push(calcTip(bills[i]) + bills[i]);
}


console.log(tips);
console.log(totals);