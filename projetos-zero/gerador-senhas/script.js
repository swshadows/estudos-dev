// Declarando constantes
const CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
const CLENGTH = CHARSET.length;
let inputElement = document.getElementById("appinput");
let resultElement = document.getElementById("appresults");
let resultInput = document.getElementById("resinput");
let tooltip = document.getElementById("ttip");
let pword;

// Iniciar verificações
// Regras: Maior que 8 e menor que 128 caracteres
function start() {
  let inputValue = parseInt(inputElement.value);

  if (inputValue < 8) {
    inputValue = 8;
    sizeCorrect(8);
  } else if (inputValue > 128) {
    inputValue = 128;
    sizeCorrect(128);
  }

  if (Number.isInteger(inputValue)) {
    generatePassword(inputValue);
  } else {
    printResult(null);
  }
}

// Gerar senha
function generatePassword(inputValue) {
  pword = "";
  for (let i = 0; i < inputValue; i++) {
    pword += CHARSET.charAt(Math.floor(Math.random() * CLENGTH));
  }
  printResult(1);
}

// Imprime avisos no navegador
function printResult(arg) {
  switch (arg) {
    case 1:
      resultElement.style.display = "block";
      resultInput.value = pword;
      break;
    case null:
      setTimeout(alert("Campo vazio!"), 10);
      break;
  }
}

// Caso o numero nao esteja entre 8 e 128 (não incluso), atualizar o valor dentro do input
function sizeCorrect(num) {
  inputElement.value = num;
  let warning = document.getElementById("warning");
  warning.style.visibility = "visible";
  setTimeout(() => {
    warning.style.visibility = "hidden";
  }, 2000);
}

// Função para copiar a senha após gerada
function copyPass() {
  resultInput.select();
  resultInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(resultInput.value);

  tooltip.innerHTML = "Copiado";
}

// Estética do tooltip
function outTooltip() {
  tooltip.innerHTML = "Copiar senha";
}
