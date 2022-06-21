"use strict";
// Tipando retorno
function double(n) {
    return n * 2;
}
// Tipo void
function printMessage(msg) {
    console.log(`Mensagem: > ${msg}`);
}
printMessage("Olá, bem-vindo");
// Callback sem argumento
function greeting(nome) {
    return `Olá, ${name}`;
}
function prepareGreeting(f, username) {
    console.log("Preparando função de callback");
    console.log(f(username));
}
prepareGreeting(greeting, "John");
// Generic Functions
function showFirstElement(arr) {
    return arr[0];
}
console.log(showFirstElement([1, 2, 3]));
console.log(showFirstElement(["a", "b", "c"]));
// Constraints em generics
function showBigger(a, b) {
    if (+a > +b)
        return a;
    else
        return b;
}
console.log(showBigger(1, 2));
console.log(showBigger("1", "2"));
// Especificando tipo
function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(concatArrays([1, 2, 3], [4, 5]));
console.log(concatArrays([1, 2, 3], ["t", "p"]));
// Parâmetro opcional
function showGreeting(name, greet) {
    if (greet)
        return `Olá ${greet} ${name}`;
    else
        return `Olá ${name}`;
}
console.log(showGreeting("Gabriel"));
console.log(showGreeting("John", "Doutor"));
// Valor default
function soma(x, y = 10) {
    return x + y;
}
console.log(soma(20));
console.log(soma(20, 20));
// Tipo unknown
function doSomething(x) {
    if (Array.isArray(x))
        console.log(x[0]);
    else
        console.log(x);
}
doSomething(5);
doSomething([1, 2, 3]);
// Tipo never
function throwError(msg) {
    throw new Error(msg);
}
// throwError("Erro fatal");
// Rest operator
function somarTodos(...n) {
    return n.reduce((n, next) => n + next);
}
console.log(somarTodos(1, 2, 3, 4, 5));
// Destructuring
function showProductDetails2({ name, price }) {
    return `O nome do produto é ${name} e custa R$ ${price}`;
}
const shirt2 = { name: "Camisa", price: 39.99 };
console.log(showProductDetails2(shirt2));
