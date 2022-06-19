// Generic em interface
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car2 = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;
const myCar: Car2 = {
  name: "Fusca",
  wheels: 4,
  engine: 1.0,
  color: "White",
};
const myPen: Pen = {
  name: "Caneta Bic",
  wheels: false,
  engine: false,
  color: "Blue",
};

// Type parameters
function getKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key.toString()} está presente com valor ${obj[key]}`;
}

const server = {
  hd: "1tb",
  ram: "32gb",
};

console.log(getKey(server, "hd"));

// Keyof
type Char = { name: string; age: number };
type C = keyof Char;

function showCharData(obj: Char, key: C): string {
  return `${obj[key]}`;
}

const myChar = {
  name: "Jonas",
  age: 30,
};

console.log(showCharData(myChar, "age"));
// Typeof
const userName: string = "Matheus";
const userName2: typeof userName = "João";

// Indexed Access type
type Truck = { km: number; kg: number; desc: string };
type Km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  desc: "Caminhão grande",
};

function showKm(km: Km): void {
  console.log(`O veiculo tem ${km}km(s) rodados`);
}

showKm(newTruck.km);

// Conditional Access types
interface A {}
interface B extends A {}
type myType = B extends A ? number : string;

// Template Literals type
type testA = "text";
type customType = `some ${testA}`;

const testing: customType = "some text";
