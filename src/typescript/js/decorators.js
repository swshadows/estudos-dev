"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Testando decorator
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertyKey, descriptor) {
        console.log("Executanto decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class TestClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    myDecorator()
], TestClass.prototype, "testing", null);
const newObj = new TestClass();
newObj.testing();
// Multiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executando A");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executando B");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("Executando C");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    a(),
    b(),
    c()
], MultipleDecorators.prototype, "testing", null);
// Class decorator
function classDec(constructor) {
    if (constructor.name === "Email")
        console.log("Criando email");
}
let Email = class Email {
    constructor(name) {
        this.name = name;
    }
};
Email = __decorate([
    classDec
], Email);
const gmail = new Email("gmail");
console.log(gmail);
// Function decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Tractor {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
__decorate([
    enumerable(false)
], Tractor.prototype, "getName", null);
const trator = new Tractor("MK10");
console.log(trator.getName());
// Accessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return this.name;
    }
    get showAge() {
        return this.age;
    }
}
__decorate([
    enumerable(false)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// Property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const get = () => value;
        const set = (newVal) => (value = `000${newVal}`);
        Object.defineProperty(target, propertyKey, { set, get });
    };
}
class Identifier {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], Identifier.prototype, "id", void 0);
const itemOne = new Identifier("1");
console.log(itemOne);
// Exemplo real com class decorator
// Gerando data de criação com decorator
function createdDate(constructor) {
    constructor.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pencil = class Pencil {
    constructor(id) {
        this.id = id;
    }
};
Pencil = __decorate([
    createdDate
], Pencil);
const newBook = new Book(12);
const newPencil = new Pencil(55);
console.log(newBook);
// Exemplo real com method decorator
// Validando se usuário já postou algo
function checkIfAlreadyPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou");
                return null;
            }
            else
                return childFunction.apply(this, args);
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post: ${content}`);
    }
}
__decorate([
    checkIfAlreadyPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Primeiro post", newPost.alreadyPosted);
newPost.post("Segundo post", newPost.alreadyPosted);
newPost.post("Terceiro post", newPost.alreadyPosted);
// Exemplo real com property decorator
// Aplicando máximo de caracteres
function maxChars(limit) {
    return function (target, propertyKey) {
        let value;
        const get = () => value;
        const set = (newVal) => {
            if (newVal.length > limit) {
                console.log(`Valor deve ter no máximo ${limit} digitos`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, { get, set });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    maxChars(8)
], Admin.prototype, "username", void 0);
let pedro = new Admin("Pedroadmin1239087193");
