'use strict';

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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
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