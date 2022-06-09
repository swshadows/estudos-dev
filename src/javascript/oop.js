// Usando new
const person = new Object();
person.nome = "Luiz";

// Usando literais
const person1 = {
  nome: "Luiz",
};

// Classes
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  speak(phrase) {
    console.log(`${this.name} está falando '${phrase}'`);
  }
}

const person2 = new Person("Jonas", "Santos");
person2.speak("Olá");

// Heranca
class Worker extends Person {
  constructor(salary) {
    super();
    this.salary = salary;
  }
}

// Static
class TV {
  construtor(name) {
    this.name = name;
    this.on = false;
  }

  turnOn() {
    if (!this.on) this.on = true;
  }

  static turnOnAll() {
    console.log("TVs ligadas");
  }
}

TV.turnOnAll();
