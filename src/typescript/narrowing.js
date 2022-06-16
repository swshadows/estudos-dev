"use strict";
function sum1(a, b) {
    if (typeof a === "string" && typeof b === "string")
        return parseFloat(a) + parseFloat(b);
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    return "Impossível realizar soma";
}
console.log(sum1("4", "59"));
console.log(sum1(3, 7));
console.log(sum1(3, "6"));
// Checagem de valor
function operations(arr, operation) {
    if (operation) {
        if (operation == "sum")
            return arr.reduce((i, next) => i + next);
        if (operation == "sub")
            return arr.reduce((i, next) => i - next);
    }
    return "Escolha uma operação";
}
console.log(operations([1, 2, 3, 4], "sum"));
console.log(operations([1, 2, 3, 4], "sub"));
console.log(operations([1, 2, 3, 4], "123"));
// Instancia
class User {
}
class Superuser extends User {
}
const John = new User();
const Paul = new Superuser();
function checkUser(usr) {
    if (usr instanceof Superuser)
        return "Olá, você é superuser";
    return "Olá, vocé é user";
}
console.log(checkUser(John));
console.log(checkUser(Paul));
// Operador in
class Dog {
    constructor(n, b) {
        this.name = n;
        if (b) {
            this.breed = b;
        }
    }
}
const rex = new Dog("Rex");
const bob = new Dog("Bob", "Golden Retriever");
function showDogDetails(dog) {
    if ("breed" in dog)
        return `${dog.name} é da raça ${dog.breed}`;
    return `${dog.name} é da raça SRD`;
}
console.log(showDogDetails(rex));
console.log(showDogDetails(bob));
class Review {
    constructor(n) {
        if (n)
            this.nota = n;
        else
            this.nota = false;
    }
}
const revCinco = new Review("5");
const revNull = new Review();
function returnRev(rev) {
    if ("nota" in rev)
        return `O usuário deu nota ${rev.nota}`;
    return "O usuário não deu uma nota";
}
console.log(returnRev(revCinco));
console.log(returnRev(revNull));
