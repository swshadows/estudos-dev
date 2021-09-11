// Manda um alerta no browser
alert("Olá Mundo")

// Manda uma mensagem no console
console.log("Hello World")

// Testes com variáveis
var a = 10; 
var b; //Undefined
var c = null;
var d = true;
var e = "String";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Testes com operações matemáticas
var a1 = 10;

console.log("a = ", a, " a1 = ", a1)
console.log("a + a1 = ", a + a1);
console.log("a - a1 = ", a - a1);
console.log("a * a1 = ", a * a1);
console.log("a / a1 = ", a / a1);
console.log("a % a1 = ", a % a1);

// Incrementos e decrementos

console.log("a = ", a, " a1 = ", a1)
a++;
a1--;

console.log("a++ = ", a);
console.log("a1-- = ", a1);

a = 10;
a += a1;
console.log("a = 10, a1 = 9, a += a1 = ", a);

// Testes com operadores comparativos

a = 10;
a1 = 10;

console.log("a = ", a, " a1 = ", a1);
console.log("a == a1 ", a == a1);
console.log("a != a1 ", a != a1);
console.log("a === a1 ", a === a1);
console.log("a !== a1 ", a !== a1);
console.log("a >= a1 ", a >= a1);
console.log("a <= a1 ", a <= a1);

// Testes com operadores logicos
// Checar idade entre 20 e 30 - Teste de E (&&)
var idade = 29;

var maior20 = idade >= 20;
var menor30 = idade <= 30;
var entre = maior20 && menor30;

console.log("Idade = ", idade);
console.log("Maior que vinte", maior20);
console.log("Menor que trinta", menor30);
console.log("Entre 20 e 30 anos", entre);

// Checar idade menor que 10 e maior que 65 - Teste de OU (||)
idade = 10;

var menor10 = idade <= 10;
var maior65 = idade >= 65;
var ouou = menor10 || maior65;

console.log("Idade = ", idade);
console.log("Menor que dez", menor10);
console.log("Maior que 65", maior65);
console.log("Tem direito a gratuidade? ", ouou);

// Testes com strings