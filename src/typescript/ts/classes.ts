// Campos em classes
class UserPerson {
  name!: string;
  age!: number;
}

const user1 = new UserPerson();
console.log(user1);

// Constructor
class NewUser {
  name;
  age;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const user2 = new NewUser("Rafael", 30);

// Readonly em classes
class Car {
  name: string;
  readonly wheels: number = 4;
  constructor(n: string) {
    this.name = n;
  }
}

const fusca = new Car("Fusca");

// Herança e super
class Machine {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Computer extends Machine {
  processorCores: number;
  constructor(n: string, p: number) {
    super(n);
    this.processorCores = p;
  }
}

const intel = new Computer("Intel Core", 8);

// Métodos
class Dwarf {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greeting(): void {
    console.log("Hey stranger");
  }
}

const abel = new Dwarf("Abel");
abel.greeting();

// Getters
class Person {
  name: string;
  surname: string;
  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

const jonas = new Person("Jonas", "Basilio");
console.log(jonas.fullName);

// Setters
class Coords {
  x!: number;
  y!: number;
  set fillX(x: number) {
    this.x = x;
  }
  set fillY(y: number) {
    this.y = y;
  }
}

const coords2 = new Coords();
coords2.fillX = 2;
coords2.fillY = 15;

// Classes com implements
interface showTitle {
  itemTitle(): string;
}

class BlogPost implements showTitle {
  title;
  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
    return `O titulo é ${this.title}`;
  }
}

const myPost = new BlogPost("Hello World");
console.log(myPost.itemTitle());

// Polimorfismo ou override
class Base {
  someMethod(): void {
    console.log("Foo");
  }
}
class Nova extends Base {
  someMethod(): void {
    console.log("Bar");
  }
}

const nova = new Nova();
nova.someMethod();

// Visibilidade
// Public
class Mode {
  public type: string;
  constructor(type: string) {
    this.type = type;
  }
}

const mode = new Mode("Public");

// Protected
class F {
  protected x: number = 10;
  getX(): number {
    return this.x;
  }
}

const f = new F();
console.log(f.getX());

// Private
class E {
  private x: number = 15;
  getX(): number {
    return this.x;
  }
}

const e = new E();
console.log(e.getX());

// Static
class Foobar {
  static foo: string = "Foo";
  static bar(): string {
    return "bar";
  }
}

console.log(Foobar.foo, Foobar.bar());

// Generic class
class Item<T, U> {
  first;
  second;
  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}

const newItem = new Item("Um", 2);
const newItem2 = new Item(1, 2);

// Parameter properties
class PP {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty(): number {
    return this.qty;
  }

  get showPrice(): number {
    return this.price;
  }
}

// Class expressions
const MyClass = class<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
};
const classTest = new MyClass("Classe teste");

// Abstract
abstract class Abstract {
  abstract showName(): void;
}
class City extends Abstract {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }

  showName(): void {
    console.log(name);
  }
}
