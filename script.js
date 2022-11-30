'use strict';

const bernard1 = {
    name: 'Bernard',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        return this.weight / Math.pow(this.height, 2);
    },
}

const marcel1 = {
    name: 'Marcel',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        return this.weight / Math.pow(this.height, 2);
    },
}

marcel1.bmi = marcel1.calcBMI();
bernard1.bmi = bernard1.calcBMI();

const bernard2 = {
    name: 'Bernard',
    weight: 95,
    height: 1.88,
    calcBMI: function () {
        return this.weight / Math.pow(this.height, 2);
    },
}

const marcel2 = {
    name: 'Marcel',
    weight: 85,
    height: 1.76,
    calcBMI: function () {
        return this.weight / Math.pow(this.height, 2);
    },
}

marcel2.bmi = marcel1.calcBMI();
bernard2.bmi = bernard1.calcBMI();

function compareBMI (obj1, obj2) {
    if (obj1.calcBMI() > obj2.calcBMI()) {
        console.log(
            `L’IMC de ${obj1.name} (${parseFloat(obj1.calcBMI().toFixed(2))}) est plus élevé que celui de ${obj2.name} (${parseFloat(obj2.calcBMI().toFixed(2))})`
        )
    } else {
        console.log(
            `L’IMC de ${obj2.name} (${parseFloat(obj2.calcBMI().toFixed(2)) }) est plus élevé que celui de ${obj1.name} (${parseFloat(obj1.calcBMI().toFixed(2))})`
        )
    }
}


compareBMI(bernard1, marcel1);
compareBMI(bernard2, marcel2);
console.log(marcel2.BMI2);

