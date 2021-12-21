let game = {
  techs: ["bootstrap", "css", "electron", "firebase", "html", "javascript", "jquery", "mongo", "nodejs", "react"],
  lockMode: false,
  firstCard: null,
  secondCard: null,
  cards: null,

  // Identificador de cartas
  setCard: function (id) {
    let card = this.cards.filter((card) => card.id === id)[0];
    if (card.flipped || this.lockMode) {
      return false;
    }

    if (!this.firstCard) {
      this.firstCard = card;
      this.firstCard.flipped = true;
      return true;
    } else {
      this.secondCard = card;
      this.secondCard.flipped = true;
      this.lockMode = true;
      return true;
    }
  },

  //   Checa se as cartas são iguais
  checkMatch: function () {
    if (!this.firstCard || !this.secondCard) return false;
    return this.firstCard.icon === this.secondCard.icon;
  },

  //   Limpa os registros de carta
  clearCards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },
  // Vira as cartas
  unflipCards: function () {
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clearCards();
  },
  // Método para criar as cartas
  createCardsFromTechs: function () {
    this.cards = [];

    for (let tech of this.techs) {
      this.cards.push(this.createPairFromTech(tech));
    }

    this.cards = this.cards.flatMap((pair) => pair);
    this.shuffleCards();
    return this.cards;
  },
  // Método para criar os pares
  createPairFromTech: function (tech) {
    return [
      {
        id: this.createIDWithTech(tech),
        icon: tech,
        flipped: false,
      },
      {
        id: this.createIDWithTech(tech),
        icon: tech,
        flipped: false,
      },
    ];
  },

  // Método para gerar o ID das cartas
  createIDWithTech: function (tech) {
    return tech + parseInt(Math.random() * 1000);
  },

  // Embaralha as cartas
  shuffleCards: function () {
    let currentIndex = this.cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
    }
  },

  //   Checa o gameover
  checkGameOver: function () {
    return this.cards.filter((card) => !card.flipped).length == 0;
  },
};
