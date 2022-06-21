"use strict";
function showProductDetails(product) {
    const info = `Nome: ${product.name}, R$ ${product.price}`;
    if (product.isAvailable)
        console.log(`${info}, produto disponível`);
    else
        console.log(info);
}
const shirt = {
    name: "Camiseta",
    price: 18.99,
    isAvailable: false,
};
showProductDetails(shirt);
const Fusca = {
    brand: "Ford",
    wheels: 4, // Não poderá ser alterado
};
const coordinates = {
    x: 213.41,
    y: 151,
};
const pessoa1 = {
    name: "Matheus",
};
const pessoa2 = {
    name: "Jonas",
    powers: ["Super Strength"],
};
console.log(pessoa1, pessoa2);
const pessoa3 = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
// Readonly Array
let arr1 = ["M", "B"];
const arr2 = [1, 2, 3, 4];
// Tupla com readonly
function showNumbers2(ns) {
    console.log(ns[0], ns[1]);
}
