// Iniciando variáveis e constantes
const FRONT = "card-front";
const BACK = "card-back";
const CARD = "card";
const ICON = "icon";

startGame();

// Inicia o jogo
function startGame() {
  initializeCards(game.createCardsFromTechs());
}

// Inicializa as cartas no tabuleiro
function initializeCards(cards) {
  let gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";
  game.cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    cardElement.addEventListener("click", flipCard);
    createCardContent(card, cardElement);
    gameBoard.appendChild(cardElement);
  });
}

// Função para criar o conteúdo das cartas
function createCardContent(card, cardElement) {
  createCardFace(FRONT, card, cardElement);
  createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, cardElement) {
  let cardElementFace = document.createElement("div");
  cardElementFace.classList.add(face);

  if (face === FRONT) {
    let iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = "assets/" + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    cardElementFace.innerHTML = "&lt/&gt";
  }
  cardElement.appendChild(cardElementFace);
}

// Função para girar as cartas
function flipCard() {
  if (game.setCard(this.id)) {
    this.classList.add("flip");
    if (game.secondCard) {
      if (game.checkMatch()) {
        game.clearCards();
        if (game.checkGameOver()) {
          let gameOverLayer = document.getElementById("gameOver");
          gameOverLayer.style.display = "flex";
        }
      } else {
        setTimeout(() => {
          let firstCardView = document.getElementById(game.firstCard.id);
          let secondCardView = document.getElementById(game.secondCard.id);

          firstCardView.classList.remove("flip");
          secondCardView.classList.remove("flip");
          game.unflipCards();
        }, 500);
      }
    }
  }
}

// Reiniciar o jogo
function restartGame() {
  game.clearCards();
  startGame();
  let gameOverLayer = document.getElementById("gameOver");
  gameOverLayer.style.display = "none";
}
