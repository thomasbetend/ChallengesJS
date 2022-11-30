'use strict';

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

function displayTemp (temp) {
    for (let i=0; i<temp.length; i++) {
        if (i === 0) {
            if (temp[i] === 0|1) {
                console.log(`${temp[i]} degré dans ${i + 1} jour`);
            } else {
                console.log(`${temp[i]} degrés dans ${i + 1} jour`);
            }
        } else {
            if (temp[i] === 0|1) {
                console.log(`${temp[i]} degré dans ${i + 1} jours`);
            } else {
                console.log(`${temp[i]} degrés dans ${i + 1} jours`);
            }       
        }
    }
}

displayTemp(temp1);
displayTemp(temp2);
