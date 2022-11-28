'use strict';

let Bernard = {
    weight: 65,
    height: 1.88
};

let Marcel = {
    weight: 85,
    height: 1.76
};

function imc (weight, height) {
    return parseFloat(weight / (height * height)).toFixed(1);
};

let imcBernard = imc(Bernard.weight, Bernard.height);
let imcMarcel = imc(Marcel.weight, Marcel.height);

let message = "";

if (imcBernard > imcMarcel) {
    message = "Bernard a un IMC(" + imcBernard + ") plus élevé que Marcel(" + imcMarcel + ").";
} else {
    message = "Marcel a un IMC(" + imcMarcel + ") plus élevé que Bernard(" + imcBernard + ").";
}

console.log(message);

function imcMessage (person) {
    if (imc(person.weight, person.height) <18.5) {
        return "Insuffisance pondérale";
    } else if (imc(person.weight, person.height) <24.9) {
        return "Normal";
    } else if (imc(person.weight, person.height) <29.9) {
        return "Surpoids";
    } else if (imc(person.weight, person.height) <40) {
        return "Obésité";
    } else {
        return "Obésité massive";
    }
}

console.log(imcMessage(Bernard));
console.log(imcMessage(Marcel));