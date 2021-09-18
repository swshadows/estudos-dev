let screen = document.getElementById("screen-canvas");

let context = screen.getContext("2d");

// Linhas
context.moveTo(0, 0);
context.lineTo(50, 50);
context.lineTo(100, 0);
context.strokeStyle = "red";
context.lineWidth = 5;
context.stroke();

// Retângulo
context.fillStyle = "blue";
context.fillRect(100, 10, 100, 200);

// Circulos

context.beginPath();
context.strokeStyle = "green";
context.arc(250, 250, 50, 0, 2 * Math.PI);
context.stroke();

// Animações

let circle = {
  x: 300,
  y: 400,
  radius: 30,
  begin: 0,
  end: 0,
};

setInterval(function () {
  if (circle.end < 2 * Math.PI) {
    circle.end += 0.1;
  }
  drawCircle(circle);
}, 50);

function drawCircle(c) {
  context.beginPath();
  context.strokeStyle = "black";
  context.fillStyle = "red";
  context.arc(c.x, c.y, c.radius, c.begin, c.end);
  context.fill();
  context.stroke();
}

// Imagens
let img = new Image();
img.src = "assets/images/thumbs-up.png";

img.onload = desImage;

function desImage() {
  context.drawImage(this, 20, 300, this.naturalWidth / 3, this.naturalHeight / 3);
}
