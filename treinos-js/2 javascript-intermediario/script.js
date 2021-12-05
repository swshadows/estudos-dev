// Propriedade Document

console.log(window.document);

document.body.innerHTML =
  "<h1>Titulo inserido com JS</h1>" + document.body.innerHTML;

// Pegando a tag com a ID p1
let p = document.getElementById("p1");
console.log(p);

// Pegando todos as tags com classe "green"
let paragrafos = document.getElementsByClassName("red");
console.log(paragrafos);

// Pegando todas as tags de nome <p>
let todos_paragrafos = document.getElementsByTagName("p");
console.log(todos_paragrafos);

// Pegando a tag de ID 'p2'
let p2 = document.getElementById("p2");
p2.innerHTML = "Colocando <strong>negrito</strong> dentro de um P com JS";

p.innerText = "Trocando texto do p1, não muda o<strong> HTML</strong>";

console.log(
  "textContent mostra até o conteudo oculto, enquanto o innerText não: " +
    p.textContent
);

// Mudando o nome da classe, perdendo o estilo
p.className = "";
p.style.backgroundColor = "red";

// Função loaded: Executada após carregar a pagina para editar o h6
function loaded() {
  let h6 = document.getElementById("aga6");
  h6.addEventListener("mouseover", mousein);
  h6.addEventListener("mouseout", mouseout);
}

// Edita o conteudo do texto baseado no mouse estar no contexto
function mousein() {
  this.innerText = "Mouse dentro do contexto";
}

// Edita o conteudo do texto baseado no mouse não estar no contexto
function mouseout() {
  this.innerText = "Mouse fora do contexto";
}

// Troca o texto baseado no que foi escrito em um input text
function trocarTexto(input) {
  let h1 = document.getElementsByTagName("h1")[3];
  h1.innerText = input.value;
}

// Esconde determinado h1
function hideh1() {
  let h1 = document.getElementsByTagName("h1")[3];
  if (h1.style.display == "block") h1.style.display = "none";
  else h1.style.display = "block";
}

// Printa no log que o titulo em questão foi clicado
function titleClick() {
  console.log("Titulo foi clicado");
}
// Testando biblioteca Math
let n = Math.sqrt(16);
console.log("Sqrt de 16 é: " + n);

n = Math.pow(2, 3);
console.log("2 elevado a 3 é: " + n);

n = Math.PI;
console.log("Pi: " + n);

n = Math.E;
console.log("E: " + n);

let random = Math.round(Math.random() * 100);
console.log("Esse numero é aleatório e arredondado entre 0 e 100: " + random);

// Javascript Object Notation (JSON)

let fstring = { nome: "joelson", idade: 21 };
let fjson = JSON.stringify(fstring);

let gstring = '{"nome":"jose","idade":7}';
let gjson = JSON.parse(gstring);

console.log(fstring);
console.log(fjson);

console.log(gstring);
console.log(gjson);
// localStorage

onload = function () {
  let itemLoaded = localStorage.getItem("nometitulo");
  let h1changed = document.getElementById("nometitle");
  h1changed.innerHTML = itemLoaded;
};

function atualizar(element) {
  let textinput = element.value;
  let h1changer = document.getElementById("nometitle");

  h1changer.innerHTML = textinput;
  localStorage.setItem("nometitulo", textinput);
}

// Temporizadores
var interval;
function tempo() {
  let temp = document.getElementById("tempotest");
  let temp2 = document.getElementById("tempotest1");
  temp.innerHTML = "Esse texto mudará de cor após 3 segundos";
  temp2.innerHTML = "Esse numero mudará todo segundo: " + concate;
  setTimeout(mudarCor, 1000 * 3);
  interval = setInterval(tempo1, 1000);
}

function mudarCor() {
  let temp = document.getElementById("tempotest");
  temp.style.color = "red";
}

var concate = 1;

function tempo1() {
  let temp = document.getElementById("tempotest1");
  temp.innerHTML = "Esse numero mudará todo segundo: " + concate;
  concate++;
}

function stopInterval() {
  clearInterval(interval);
}
