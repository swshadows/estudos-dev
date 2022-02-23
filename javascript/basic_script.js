// Manda um alerta no browser
//alert("Olá Mundo")

// Manda uma mensagem no console
console.log("Hello World");

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

console.log("a = ", a, " a1 = ", a1);
console.log("a + a1 = ", a + a1);
console.log("a - a1 = ", a - a1);
console.log("a * a1 = ", a * a1);
console.log("a / a1 = ", a / a1);
console.log("a % a1 = ", a % a1);

// Incrementos e decrementos

console.log("a = ", a, " a1 = ", a1);
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
var aspas_simples = "Texto com 'aspas simples' para teste";
var aspas_duplas = 'Texto com "aspas duplas" para teste';
var number1 = 9;
var strnum = "9";

console.log(aspas_simples);
console.log(aspas_duplas);
console.log("Concatenação de strings:" + aspas_duplas + aspas_simples);
console.log("Concatenação string com numero: " + aspas_simples + number1);
console.log("Concatenação de string com string que contem numero: " + number1 + strnum);
console.log("Transformação de string com numero: " + number1 * strnum);

// Testes com condicionais IF e ELSE
// Pessoas maiores ou iguais a 18 anos e menores que 70 podem comprar bebida alcoolica
idade = 10;

console.log("Idade: " + idade);
if (idade >= 18 && idade < 70) {
  console.log("Pode comprar bebida");
  console.log("Não pode comprar bebida");
} else {
  console.log("Não pode comprar bebida");
  if (idade >= 70) console.log("Muito velho pra comprar bebida");
  else console.log("Muito novo pra comprar bebida");
}

// Testes com condicional SWITCH e CASE
// Calculo de media
var nota1 = 10;
var nota2 = 10;
var media = (nota1 + nota2) / 2;
var conceito = "";

if (media >= 8) conceito = "Otimo";
else if (media >= 6) conceito = "Bom";
else conceito = "Ruim";

console.log("Média: " + media + " / Conceito: " + conceito);
switch (conceito) {
  case "Otimo":
    console.log("Nota perfeita. Parabens!");
    break;
  case "Bom":
    console.log("Nota boa, pode melhorar. Parabens.");
    break;
  case "Ruim":
    console.log("Pode melhorar muito. Estude mais um pouco");
    break;
  default:
    console.log("Houve um erro");
    break;
}

// Estrutura de repetição com FOR e WHILE
var repeat = 10;
for (var vez = 1; vez <= repeat; vez++) {
  console.log("FOR: Repetindo pela " + vez + "ª vez");
}

repeat = 0;
while (repeat <= 10) {
  console.log("WHILE: Repetindo pela " + repeat + " ªvez");
  repeat++;
}

// Testes com arrays
var pessoas_array = ["Joelson", "Mario", "Joana"];

console.log(pessoas_array);
for (var i in pessoas_array) {
  console.log(pessoas_array[i]);
}

// Testes com funções

function calcularMedia(n1, n2) {
  // Função para calcular a média de 2 numeros
  var numero1 = n1;
  var numero2 = n2;
  var media = (nota1 + nota2) / 2;
  return media;
}

console.log("A média entre 10 e 6 é: " + calcularMedia(10, 6));

console.log(calcularMedia);

// Testes com objetos

function mediaCalc() {
  return (this.nota[0] + this.nota[1]) / 2;
}

var aluno = {
  nome: "Joelson",
  nota: [10, 9],
  media: mediaCalc,
};

console.log("Nome do aluno: " + aluno.nome);
console.log("Nota do aluno: " + aluno["nota"]);
console.log("Média de " + aluno.nome + ": " + aluno.media());

aluno.matricula = 2120021;
console.log("Matricula do aluno: " + aluno.matricula);

// Testes com construtores
function criarAluno(nome, n1, n2) {
  return {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    },
  };
}

var turma = [criarAluno("Joelson", 9.5, 10), criarAluno("José", 7.5, 5), criarAluno("Mariana", 10, 2)];

for (var index in turma) {
  console.log(turma[index]);
  console.log("Média: " + turma[index].media());
}

// Testes com datas
var date = new Date(1);

console.log(date);
date.setHours(60);
console.log(date);

// Const, Let e Var

var var1 = 4;
let let1 = 3;
const const1 = 2;

console.log("Const não muda de valor: " + const1);
console.log("Let é variavel local: " + let1);
console.log("Var é variavel global: " + var1);
