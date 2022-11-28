'use strict';

let scoreDauphins1 = [96, 108, 89];
let scoreKoalas1 = [88, 91, 110];

let scoreDauphins2 = [97, 112, 101];
let scoreKoalas2 = [109, 95, 123];

let scoreDauphins3 = [97, 112, 101];
let scoreKoalas3 = [109, 95, 106];


function average (scoreTeam) {
    let totalScore = scoreTeam.reduce((a, b)=>a + b, 0);
    let numberScore = scoreTeam.length;

    return parseFloat(totalScore / numberScore).toFixed(2);
}


function winner (scoreDauphins, scoreKoalas) {
    if ((average(scoreDauphins) || average(scoreKoalas)) > 100) {
        if (average(scoreKoalas) < average(scoreDauphins)) {
            return "Les Dauphins gagnent avec une moyenne de " + average(scoreDauphins) + " contre une moyenne de " + average(scoreKoalas) + " pour les Koalas";
        } else if (average(scoreDauphins) < average(scoreKoalas)){
            return "Les Koalas gagnent avec une moyenne de " + average(scoreKoalas) + " contre une moyenne de " + average(scoreDauphins) + " pour les Dauphins";
        } else {
            return "Egalité parfaite avec une moyenne de " + average(scoreDauphins);
        }
    } else {
        return "Aucune équipe n'a gagné";
    }
}

console.log(winner(scoreDauphins1, scoreKoalas1));
console.log(winner(scoreDauphins2, scoreKoalas2));
console.log(winner(scoreDauphins3, scoreKoalas3));

