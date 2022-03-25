// Testando strict
// "use strict"
// x = 3;
// console.log(x)

// Testando this e bind

let dog = {
  sound: "Au Au",
  speak: genericSpeak,
};

let cat = {
  sound: "Miau",
  speak: genericSpeak,
};

function genericSpeak() {
  console.log(this.sound);
}

let catSpeakBinded = genericSpeak.bind(cat);

// Imprimindo com função normal
dog.speak();
// Imprimindo com função binded
catSpeakBinded();

// Arrow functions (ATENÇÃO: Não entende 'bind' e 'this')
let dobro = (x) => 2 * x;

console.log("Testando arrow function: Dobro de 2 = " + dobro(2));

// Testes com callback
let users = ["Adriano", "Marcos", "José"];

function addUser(name, callback) {
  setTimeout(() => {
    users.push(name);
    callback();
  }, 1000);
}

function listUsers() {
  console.log(users);
}

addUser("Joelson", listUsers);

// Testando promises
let users1 = ["Ednaldo", "Paulo", "Bernardo"];

function addUser1(name) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      users1.push(name);

      let error = false;
      if (!error) resolve();
      else reject({ msg: "ERROR" });
    }, 1000);
  });
  return promise;
}

function listUsers1() {
  console.log(users1);
}

addUser1("Joca")
  .then(listUsers1)
  .catch((error) => {
    console.log(error.msg);
  });

// Async Await
// async function executar(){

//     await addUser1("Joca");
//     listUsers1();
// }
// executar();

// Filter

function addClassmates(name, age) {
  return { name, age };
}

let classmates = [addClassmates("Maria", 29), addClassmates("Joao", 35), addClassmates("José", 42), addClassmates("Fabio", 23)];

function olderThan30(classmate) {
  return classmate.age > 30;
}

console.log("vv Alunos mais velhos que 30 vv");
console.log(classmates.filter(olderThan30));

// Map

function addClassmates1(name, age) {
  return { name, age };
}

let classmates1 = [addClassmates("Maria", 29), addClassmates("Joao", 35), addClassmates("José", 42), addClassmates("Fabio", 23)];

function nameAge(classmates) {
  return classmates.name + " tem " + classmates.age + " anos";
}

console.log(classmates1.map(nameAge));
// Valor e referência
let arrayA = [1, 2, 3, 4];
let arrayB = arrayA.slice();
// Também pode ser utilizado 'let arrayB = [...arrayA]'

arrayB.push(5);
console.log(arrayA + " - " + arrayB);

let objectA = { nome: "Ana", idade: 8 };
let objectB = Object.assign({}, objectA);
// Também pode ser utilizado 'let objectB = { ...objectA }'

objectB.idade = 9;
console.log(objectA);
console.log(objectB);

// Reduce
function ageConcat(total, classmate) {
  return total + classmate.age;
}

console.log(classmates);
console.log(classmates.reduce(ageConcat, 0));
// Fetch

let fetchURL = "https://api.exchangerapi.io/latest?base=USD&symbols=BRL";

function convert() {
  let input = document.getElementById("value");
  let valor = input.value;

  fetch(fetchURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let rate = data.rates.BRL;

      let resultado = `${valor} doláres = ${rate * valor} em reais`;
      document.getElementById("results").innerHTML = resultado;
    });
}

// Tratamento de erros Try e Catch
let attribName = "";

// if (attribName == "") throw "O nome não pode ser vazio";

try {
  if (attribName == "") throw "O nome não pode ser vazio";
  console.log(attribName);
} catch (err) {
  console.log("Erro: ", err);
} finally {
  console.log("Até mais");
}
