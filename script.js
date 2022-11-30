'use strict';

// Exercice 1

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnabry',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1
const players1 = game.players[0];
const players2 = game.players[1];


// 2
let gk = players1[0];
let emptyArray = [];
const fieldPlayers = emptyArray.concat(players1);
fieldPlayers.shift();

// 3
const allPlayers = players1.concat(players2);

// 4
const players1Final = players1.concat(['Thiago', 'Coutinho', 'Perisic'])

// 5
let team1 = game.odds.team1;
let team2 = game.odds.team2;
let draw = game.odds.x;


// 6
function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

function printGoals() {

    let allPlayers = players1.concat(players2);
    let nbMaxPlayers = allPlayers.length;

    let nbGoals = getRandomInt(nbMaxPlayers)

    let goalPlayers = [];

    for (let i=0; i < nbGoals; i++) {

        let rdInt = getRandomInt(nbMaxPlayers-i);

        let playerRandom = allPlayers[rdInt];
        
        goalPlayers.push(playerRandom);
        allPlayers.splice(rdInt, 1);
    }

    console.log(nbGoals);
    console.log(goalPlayers);
}

printGoals();

// 7

console.log(`${game.team1} will certainly win, according to odds...`);



// Exercice 2

// 1 

for (let i =0; i < game.scored.length; i++) {
    console.log(`But ${i+1} : ${game.scored[i]}`);
}

// 2

const odds = Object.values(game.odds)

let sumOdds = 0;
let averageOdds = 0;

for (let i = 0; i < odds.length; i++) {
    sumOdds += odds[i];
    averageOdds = sumOdds / (i + 1)
}

console.log(averageOdds);

// 3 

console.log(`Probabilité de victoire pour le ${game.team1} : ${odds[0]}`);
console.log(`Probabilité d'un match nul: ${odds[1]}`);
console.log(`Probabilité de victoire pour le ${game.team2} : ${odds[2]}`);

// 4

const scorers = {
    Gnabry: 1,
    Lewandowski: 2
}


// Exercice 3

const gameEvents = [
    [17, "⚽ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🟨 Yellow card"],
    [69, "🟥 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "🟨 Yellow card"],
];

// 1 

let events = [];

for (let i = 0; i < gameEvents.length; i++) {
    if (!(events.includes(gameEvents[i][1]))) {
        events.push(gameEvents[i][1]);
    } 
}

console.log(events);

// 2

gameEvents.splice(4, 1);

console.log(gameEvents);

// 3

const averageEvent = 90 / gameEvents.length;

console.log(
    `Un évènement est apparu en moyenne toutes les ${averageEvent} minutes.`
)

// 4 

for (let i = 0; i < gameEvents.length; i++) {
    if (gameEvents[i][0] <= 45) {
        console.log(`[PREMIÈRE MOITIÉ] ${gameEvents[i][0]} . ⚽️ ${gameEvents[i][1]}`)
    } else {
        console.log(`[SECONDE MOITIÉ] ${gameEvents[i][0]} . ⚽️ ${gameEvents[i][1]}`)
    }
}
