"use strict";
// Tipo array
let numbers = [1, 2, 3, 4, 5];
let strings = ["a", "b", "b"];
let numbers1 = [1, 2, 3, 4, 5];
let strings1 = ["a", "b", "c"];
// Tipo any
const arr = [1, "test", true];
// Tipos de parametros em função
function printName(name) {
    console.log(name);
}
printName("Carlos");
// Tipando retorno
function returnName(name) {
    return name;
}
let name1 = returnName("Carlos");
// Objetos
const pessoa = {
    name: "Carlos",
    surname: "Motta",
};
// Propriedades opcionais
function showNumbers(a, b) {
    console.log(a);
    if (b)
        console.log(b);
}
// Union types
function showBalance(balance) {
    console.log(`O saldo é R$ ${balance}`);
}
showBalance(100);
showBalance("500");
// Validando union type
function showRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é ${role}`;
}
console.log(showRole(false));
console.log(showRole("admin"));
function showID(id) {
    console.log(`O ID é ${id}`);
}
showID(1);
showID("1");
function showCoordinates(obj) {
    console.log(`Coordenadas: X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coodObj = {
    x: 2312.3,
    y: 92.3,
    z: 12,
};
showCoordinates(coodObj);
function showDirection(direction) {
    console.log(`A direção inserida é ${direction}`);
}
showDirection("left");
// Non null assertion
const p = document.getElementById("null-p");
// console.log(p!.innerText);
// Bigint
let number = 1000n;
console.log(number + 100n);
// Symbol
let symA = Symbol("a");
let symB = Symbol("a");
console.log(symA == symB);
