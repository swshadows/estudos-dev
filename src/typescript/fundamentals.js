"use strict";
// Desafio 1: Criar uma função que some dois números
function sum(n, m) {
    return n + m;
}
console.log(sum(3, 4));
// ? Tipos primitivos
// Tipo number
let x = 10;
// Tipo string
let nome = "Rafael";
// Tipo boolean
let check = true;
// Type inference e annotation
const ann = "Teste"; // O tipo é anotado, predefinido
const inf = "Teste"; // O tipo é inferido automaticamente
// Desafio 2: Criar uma var que recebe num e converter pra string em nova var, tipada por inferencia
let num1 = 10;
let str1 = "";
str1 = `${num1}`;
console.log(str1);
