// Detecta se o index foi carregado e adiciona os quadrados a um query
document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

// Evento de clicar
function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert("O jogo acabou - Vencedor é o jogador " + (playerTime + 1) + " que utiliza o simbolo: " + symbols[playerTime]);
    }, 10);
  }
  updateSquare(position);
}

// Atualizar o quadrado
function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];

  square.innerHTML = `<div class="${symbol}"></div>`;
  if (checkDraw()) {
    setTimeout(() => {
      alert("O jogo resultou em um empate");
    }, 10);
  }
}

// Reseta o jogo
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.innerHTML = "";
  });
}
