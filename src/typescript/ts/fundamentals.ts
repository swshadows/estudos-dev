// Desafio 1: Criar uma função que some dois números
function sum(n: number, m: number) {
  return n + m;
}

console.log(sum(3, 4));

// ? Tipos primitivos
// Tipo number
let x: number = 10;

// Tipo string
let nome: string = "Rafael";

// Tipo boolean
let check: boolean = true;

// Type inference e annotation
const ann: string = "Teste"; // O tipo é anotado, predefinido
const inf = "Teste"; // O tipo é inferido automaticamente

// Desafio 2: Criar uma var que recebe num e converter pra string em nova var, tipada por inferencia
let num1: number = 10;
let str1 = "";

str1 = `${num1}`;
console.log(str1);
