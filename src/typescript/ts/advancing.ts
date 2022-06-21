// Tipo array
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["a", "b", "b"];

let numbers1: Array<number> = [1, 2, 3, 4, 5];
let strings1: Array<string> = ["a", "b", "c"];

// Tipo any
const arr: any = [1, "test", true];

// Tipos de parametros em função
function printName(name: string) {
  console.log(name);
}

printName("Carlos");

// Tipando retorno
function returnName(name: string): string {
  return name;
}

let name1 = returnName("Carlos");

// Objetos
const pessoa: { name: string; surname: string } = {
  name: "Carlos",
  surname: "Motta",
};

// Propriedades opcionais
function showNumbers(a: number, b?: number) {
  console.log(a);
  if (b) console.log(b);
}

// Union types
function showBalance(balance: string | number) {
  console.log(`O saldo é R$ ${balance}`);
}

showBalance(100);
showBalance("500");

// Validando union type
function showRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado";
  }

  return `A função do usuário é ${role}`;
}

console.log(showRole(false));
console.log(showRole("admin"));

// Type alias
type ID = string | number;
function showID(id: ID) {
  console.log(`O ID é ${id}`);
}

showID(1);
showID("1");

// Interface
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoordinates(obj: Point) {
  console.log(`Coordenadas: X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coodObj: Point = {
  x: 2312.3,
  y: 92.3,
  z: 12,
};

showCoordinates(coodObj);
// Tipos literais
type direction = "left" | "right";

function showDirection(direction: direction) {
  console.log(`A direção inserida é ${direction}`);
}

showDirection("left");

// Non null assertion
const p = document.getElementById("null-p");
// console.log(p!.innerText);

// Bigint
let number: bigint = 1000n;
console.log(number + 100n);

// Symbol
let symA: symbol = Symbol("a");
let symB: symbol = Symbol("a");

console.log(symA == symB);
