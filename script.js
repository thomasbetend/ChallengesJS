'use strict';

let bill = 275;
let tip = 0.15;

function billSentence (bill) {
    (50 <= bill <= 300) ? tip = 0.15 * bill : tip = 0.20 * bill;
    let total = bill + tip;

    return "La note était de " + bill + ", le pourboire de " + tip + " et la valeur totale de " + total; 
}

console.log(billSentence(275));
console.log(billSentence(40));
console.log(billSentence(430));
