// Tipos básicos
let pname: string = 'Jonas';
let num: number = 123.32;

let array: Array<number> = [1, 2, 3];
let array2: Array<string> = ['a', 'b'];

// Objetos
let person: { name: string; age: number; adult?: boolean } = {
  name: 'Jonas',
  age: 30,
};

console.log(person);

// Funções
function sum(x: number, y: number): number {
  return x + y;
}

const sub: (x: number, y: number) => number = (x, y) => x - y;

// Tipo any
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage(1));
console.log(showMessage('Olá'));

// Tipo void
function concatNames(...args: Array<string>): void {
  console.log(args.join(' '));
}

concatNames('Luiz', 'Santos', 'Silva');

// Tipo objeto
let object1: { val1: string; val2?: string } = {
  val1: 'Val 1',
  val2: 'Val 2',
};

// Tipo array
function multArgs(...args: Array<number>): number {
  return args.reduce((prev, curr) => prev * curr, 1);
}

function concatArgs(...args: string[]): string {
  return args.join(' ');
}

// Tipo tupla
const clientData: readonly [number, string] = [1, 'José'];

// Tipos null e undefined
let x: undefined;
let y: null;

// Tipo never
function throwError(): never {
  throw new Error('Erro fatal');
}

// Tipo enum
enum Cores {
  'VERMELHO', // 1
  'AZUL', // 2
  'AMARELO', // 3
  // Também pode ter inicializador predefinido "VERMELHO" = 10
}

// Tipo unknown
let x1: unknown;

// Union Type
function addOrConcat(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  return `${x}${y}`;
}

// Tipos literais
const person2: object = {
  name: 'Luiz' as const,
  surname: 'Kelvin',
};

// Tipo alias

type Idade = number;
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK; // Union Type
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const person3: Pessoa = {
  nome: 'Jonathan',
  idade: 30,
  salario: 13980,
};

// Insersection Types
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa1 = TemNome & TemSobrenome & TemIdade;

const person4: Pessoa1 = {
  idade: 30,
  nome: 'Zeca',
  sobrenome: 'da Silva',
};

// Tipando funções
type verifyUserFn = (user: User, sentValues: User) => boolean;
type User = { username: string; password: string };

const verifyUser: verifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

// Type assertion
// const body = document.querySelector('body') as HTMLBodyElement;
// body.style.background = 'red';

// Orientação a objetos
class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  public adicionarColab(colab: Colaborador): void {
    this.colaboradores.push(colab);
  }

  public verColab(): void {
    this.colaboradores.forEach((c) => console.log(c.nome));
  }
}

class Colaborador {
  constructor(public readonly nome: string) {}
}

const empresa1 = new Empresa('Empresa');
const colab1 = new Colaborador('José');

empresa1.adicionarColab(colab1);
console.log(empresa1);

// Herança
class Person {
  constructor(public nome: string) {
    this.nome = nome;
  }
}

class Empregado extends Person {
  constructor(public nome: string, public idade: number) {
    super(nome);
    this.idade = idade;
  }
}

// Getters e Setters
class Test {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  static falar(): void {
    console.log('Oi');
  }
}

const test = new Test('Kars');
console.log(test.nome);

Test.falar();

// Abstract
abstract class Char {
  abstract Ability(): void;
}

class Warrior extends Char {
  Ability(): void {
    console.log('Axe Rush');
  }
}

// Class Types
type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

class Person5 implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
