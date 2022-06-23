// Object Type com interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  const info = `Nome: ${product.name}, R$ ${product.price}`;
  if (product.isAvailable) console.log(`${info}, produto disponível`);
  else console.log(info);
}

const shirt: Product = {
  name: "Camiseta",
  price: 18.99,
  isAvailable: false,
};

showProductDetails(shirt);

// Readonly
interface Car3 {
  brand: string;
  readonly wheels: number;
}

const Fusca: Car3 = {
  brand: "Ford",
  wheels: 4, // Não poderá ser alterado
};

// Index signature
interface CoordObject {
  [index: string]: number;
}

const coordinates: CoordObject = {
  x: 213.41,
  y: 151,
};

// Interface Extends
interface Human {
  name: string;
}

interface Superhuman extends Human {
  powers: string[];
}

const pessoa1: Human = {
  name: "Matheus",
};
const pessoa2: Superhuman = {
  name: "Jonas",
  powers: ["Super Strength"],
};

console.log(pessoa1, pessoa2);

// Intersection type
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type humanWithGun = Character & Gun;
const pessoa3: humanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

// Readonly Array
let arr1: ReadonlyArray<string> = ["M", "B"];

// Tuplas
type tupl1 = [number, number, number, number];
const arr2: tupl1 = [1, 2, 3, 4];

// Tupla com readonly
function showNumbers2(ns: readonly [number, number]) {
  console.log(ns[0], ns[1]);
}
