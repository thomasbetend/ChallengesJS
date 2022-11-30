'use strict';

const bernard1 = {
    name: 'Bernard',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        return parseFloat(this.weight / Math.pow(this.height, 2)).toFixed(2);
    },
}

const marcel1 = {
    name: 'Marcel',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        return parseFloat(this.weight / Math.pow(this.height, 2)).toFixed(2);
    },
}

bernard1.bmi = bernard1.calcBMI();
marcel1.bmi = marcel1.calcBMI();

const bernard2 = {
    name: 'Bernard',
    weight: 95,
    height: 1.88,
    calcBMI: function () {
        return parseFloat(this.weight / Math.pow(this.height, 2)).toFixed(2);
    },
}

const marcel2 = {
    name: 'Marcel',
    weight: 85,
    height: 1.76,
    calcBMI: function () {
        return parseFloat(this.weight / Math.pow(this.height, 2)).toFixed(2);
    },
}

marcel2.bmi = marcel2.calcBMI();
bernard2.bmi = bernard2.calcBMI();

function compareBMI (obj1, obj2) {
    if (obj1.bmi > obj2.bmi) {
        console.log(
            `L’IMC de ${obj1.name} (${obj1.bmi}) est plus élevé que celui de ${obj2.name} (${obj2.bmi})`
        )
    } else {
        console.log(
            `L’IMC de ${obj2.name} (${obj2.bmi}) est plus élevé que celui de ${obj1.name} (${obj1.bmi})`
        )
    }
}


compareBMI(bernard1, marcel1);
compareBMI(bernard2, marcel2);

