"use strict";
const myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "White",
};
const myPen = {
    name: "Caneta Bic",
    wheels: false,
    engine: false,
    color: "Blue",
};
// Type parameters
function getKey(obj, key) {
    return `A chave ${key.toString()} está presente com valor ${obj[key]}`;
}
const server = {
    hd: "1tb",
    ram: "32gb",
};
console.log(getKey(server, "hd"));
function showCharData(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Jonas",
    age: 30,
};
console.log(showCharData(myChar, "age"));
// Typeof
const userName = "Matheus";
const userName2 = "João";
const newTruck = {
    km: 10000,
    kg: 5000,
    desc: "Caminhão grande",
};
function showKm(km) {
    console.log(`O veiculo tem ${km}km(s) rodados`);
}
showKm(newTruck.km);
const testing = "some text";
