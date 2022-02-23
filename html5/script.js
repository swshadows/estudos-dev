// Lista
let lista = document.getElementById("lista");

let num = parseInt(lista.dataset.num);

let conteudo = "";

for (let i = 1; i <= 10; i++) {
  conteudo += "<li>" + i + "</li>";
}

lista.innerHTML += conteudo;

// Animação com JS
let player = document.getElementById("player");

let xInitial = 0;
let yInitial = 0;

setInterval(function () {
  if (xInitial < 480 || yInitial < 480) changePlayer(xInitial++, yInitial++);
}, 50);

function changePlayer(x, y) {
  let xPos = x + "px";
  let yPos = y + "px";

  player.style.top = xPos;
  player.style.left = yPos;
}
