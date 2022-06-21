// Type guard
type numString = number | string;
function sum1(a: numString, b: numString) {
  if (typeof a === "string" && typeof b === "string") return parseFloat(a) + parseFloat(b);

  if (typeof a === "number" && typeof b === "number") return a + b;

  return "Impossível realizar soma";
}

console.log(sum1("4", "59"));
console.log(sum1(3, 7));
console.log(sum1(3, "6"));

// Checagem de valor
function operations(arr: number[], operation: string | undefined) {
  if (operation) {
    if (operation == "sum") return arr.reduce((i, next) => i + next);
    if (operation == "sub") return arr.reduce((i, next) => i - next);
  }

  return "Escolha uma operação";
}

console.log(operations([1, 2, 3, 4], "sum"));
console.log(operations([1, 2, 3, 4], "sub"));
console.log(operations([1, 2, 3, 4], "123"));

// Instancia
class User {}
class Superuser extends User {}

const John = new User();
const Paul = new Superuser();

function checkUser(usr: object) {
  if (usr instanceof Superuser) return "Olá, você é superuser";

  return "Olá, vocé é user";
}

console.log(checkUser(John));
console.log(checkUser(Paul));

// Operador in
class Dog {
  name;
  breed;
  constructor(n: string, b?: string) {
    this.name = n;
    if (b) {
      this.breed = b;
    }
  }
}

const rex = new Dog("Rex");
const bob = new Dog("Bob", "Golden Retriever");

function showDogDetails(dog: Dog) {
  if ("breed" in dog) return `${dog.name} é da raça ${dog.breed}`;

  return `${dog.name} é da raça SRD`;
}
console.log(showDogDetails(rex));
console.log(showDogDetails(bob));

// Desafio 3
// Receber um review, que pode ser boolean (nao enviou review) ou number de 1 a 5 estrelas, usando narrowing para tratamento
type revString = "1" | "2" | "3" | "4" | "5";

class Review {
  nota: revString | boolean;

  constructor(n?: revString) {
    if (n) this.nota = n;
    else this.nota = false;
  }
}

const revCinco = new Review("5");
const revNull = new Review();

function returnRev(rev: Review) {
  if ("nota" in rev) return `O usuário deu nota ${rev.nota}`;

  return "O usuário não deu uma nota";
}

console.log(returnRev(revCinco));
console.log(returnRev(revNull));
