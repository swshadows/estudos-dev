"use strict";
// Campos em classes
class UserPerson {
}
const user1 = new UserPerson();
console.log(user1);
// Constructor
class NewUser {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
const user2 = new NewUser("Rafael", 30);
// Readonly em classes
class Car {
    constructor(n) {
        this.wheels = 4;
        this.name = n;
    }
}
const fusca = new Car("Fusca");
// Herança e super
class Machine {
    constructor(n) {
        this.name = n;
    }
}
class Computer extends Machine {
    constructor(n, p) {
        super(n);
        this.processorCores = p;
    }
}
const intel = new Computer("Intel Core", 8);
// Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey stranger");
    }
}
const abel = new Dwarf("Abel");
abel.greeting();
// Getters
class Person {
    constructor(name, surname) {
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
    set fillX(x) {
        this.x = x;
    }
    set fillY(y) {
        this.y = y;
    }
}
const coords2 = new Coords();
coords2.fillX = 2;
coords2.fillY = 15;
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é ${this.title}`;
    }
}
const myPost = new BlogPost("Hello World");
console.log(myPost.itemTitle());
// Polimorfismo ou override
class Base {
    someMethod() {
        console.log("Foo");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Bar");
    }
}
const nova = new Nova();
nova.someMethod();
// Visibilidade
// Public
class Mode {
    constructor(type) {
        this.type = type;
    }
}
const mode = new Mode("Public");
// Protected
class F {
    constructor() {
        this.x = 10;
    }
    getX() {
        return this.x;
    }
}
const f = new F();
console.log(f.getX());
// Private
class E {
    constructor() {
        this.x = 15;
    }
    getX() {
        return this.x;
    }
}
const e = new E();
console.log(e.getX());
// Static
class Foobar {
    static bar() {
        return "bar";
    }
}
Foobar.foo = "Foo";
console.log(Foobar.foo, Foobar.bar());
// Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const newItem = new Item("Um", 2);
const newItem2 = new Item(1, 2);
// Parameter properties
class PP {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return this.qty;
    }
    get showPrice() {
        return this.price;
    }
}
// Class expressions
const MyClass = class {
    constructor(name) {
        this.name = name;
    }
};
const classTest = new MyClass("Classe teste");
// Abstract
class Abstract {
}
class City extends Abstract {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(name);
    }
}
