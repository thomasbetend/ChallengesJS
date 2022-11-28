'use strict';

let dauphins1 = {
    name: "Dauphins",
    score: [44, 23, 71]
}

let koalas1 = {
    name: "Koalas",
    score: [65, 54, 49]
}

let dauphins2 = {
    name: "Dauphins",
    score: [85, 54, 41]
}

let koalas2 = {
    name: "Koalas",
    score: [23, 34, 27]
}


function average (score) {
    let totalScore = score.reduce((a, b)=>a + b, 0);
    let numberScore = score.length;

    return totalScore / numberScore;
}


function checkWinner (team1, team2) {
    if (average(team1.score) < average(team2.score)) {
        return `L'équipe ${team2.name} gagne (${average(team2.score)} vs ${average(team1.score)})`;
    } else {
        return `L'équipe ${team1.name} gagne (${average(team1.score)} vs ${average(team2.score)})`;
    }
}


console.log(checkWinner(dauphins1, koalas1));
console.log(checkWinner(dauphins2, koalas2));
