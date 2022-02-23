let pessoas = ["Joelson", "Ana", "Fabricia", "Carlos", "Jonnathan", "Mariana"];

function sortear() {
  let np = pessoas.length;
  let ns = Math.floor(Math.random() * np);

  document.getElementById("numsorteado").innerHTML =
    ns + " " + pessoas[ns] + " ganhou. Parabéns!";
}
