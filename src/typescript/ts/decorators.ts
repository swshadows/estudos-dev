// Testando decorator
function myDecorator() {
  console.log("Iniciando decorator");

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executanto decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class TestClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método");
  }
}

const newObj = new TestClass();
newObj.testing();

// Multiplos decorators
function a() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executando A");
  };
}
function b() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executando B");
  };
}
function c() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executando C");
  };
}

class MultipleDecorators {
  @a()
  @b()
  @c()
  testing() {
    console.log("Terminando execução");
  }
}

// Class decorator
function classDec(constructor: Function) {
  if (constructor.name === "Email") console.log("Criando email");
}

@classDec
class Email {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const gmail = new Email("gmail");
console.log(gmail);

// Function decorator
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}
class Tractor {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  @enumerable(false)
  getName(): string {
    return this.name;
  }
}

const trator = new Tractor("MK10");
console.log(trator.getName());

// Accessor decorator
class Monster {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(false)
  get showName() {
    return this.name;
  }

  @enumerable(false)
  get showAge() {
    return this.age;
  }
}

const charmander = new Monster("Charmander", 10);
console.log(charmander);

// Property decorator
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const get = () => value;
    const set = (newVal: string) => (value = `000${newVal}`);

    Object.defineProperty(target, propertyKey, { set, get });
  };
}
class Identifier {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const itemOne = new Identifier("1");
console.log(itemOne);

// Exemplo real com class decorator
// Gerando data de criação com decorator
function createdDate(constructor: Function) {
  constructor.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;
  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pencil {
  id;
  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);
const newPencil = new Pencil(55);

console.log(newBook);

// Exemplo real com method decorator
// Validando se usuário já postou algo
function checkIfAlreadyPosted() {
  return function (target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou");
        return null;
      } else return childFunction.apply(this, args);
    };

    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfAlreadyPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post: ${content}`);
  }
}

const newPost = new Post();
newPost.post("Primeiro post", newPost.alreadyPosted);
newPost.post("Segundo post", newPost.alreadyPosted);
newPost.post("Terceiro post", newPost.alreadyPosted);

// Exemplo real com property decorator
// Aplicando máximo de caracteres
function maxChars(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const get = () => value;
    const set = (newVal: string) => {
      if (newVal.length > limit) {
        console.log(`Valor deve ter no máximo ${limit} digitos`);
        return;
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, propertyKey, { get, set });
  };
}

class Admin {
  @maxChars(8)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let pedro = new Admin("Pedroadmin1239087193");
