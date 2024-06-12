// Giovanna Martins - 2321290130
function multNormal (n, n1) {
    return n * n1;
}
let a = 14;
let b = 3;
console.log(multNormal(a, b));


function filmeAtor (filme, ator) {
    return `Esse eh ${filme}, do ator ${ator}. \n`
}
let filme = 'Adam Sandler';
let ator = 'Gente Grande';
console.log(filmeAtor(filme, ator));
 
// 

function boatarde() {
    return `boatarde! \n`
}
console.log(boatarde());

// 
const main = require('prompt-sync')({signint: true});
function idade(age) {
    return `Sua idade eh ${age}. \n`;
}
let pergunta = parseInt(main('Digite sua idade: '));
console.log(idade(pergunta));

//
function impar() {
    let resultado = ''
    for (let n = 0; n < 11; n++) {
        if (n % 2 == 1) {
            resultado += `O numero ${n} eh impar. \n`
        } else {
            resultado += `O numero ${n} eh par. \n`
        }
    }
    return resultado;
}
console.log(impar());

//
let pares = [];
function par() {
    for (i = 0; i <= 20; i++) {
        while (i < 21) {
        if (i % 2 == 0) {
            pares.push(i);
        }
        break;
    }
    }
    return pares;
}
console.log(par());

// includes
function dez() {
    return pares.includes(10);
}
console.log(dez());

// bebida
function bebida() {
    for(let j = 16; j <= 20; j++) {
        switch (j) {
            case 16:
                console.log `Não pode beber`
                break;
            case 17:
                console.log `Não pode beber`
                break;
            case 18:
                console.log `Não pode beber`
                break;
            case 19:
                console.log `Pode beber`
                break;
            case 20:
                console.log `Pode beber`
                break;
        }
    }
}
bebida();

//
function soma(a, b) {
    return a + b;
}
let w = 15;
let y = 30;
console.log(soma(y, w));

//
function raf (hamburguer) {
    return `Esse eh um ${hamburguer} maravilhoso!!`
}
let comida = main('Escreva o nome do prato: ');
console.log(raf(comida));