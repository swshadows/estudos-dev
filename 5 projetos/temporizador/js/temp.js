// Definindo variáveis iniciais
let running = false;
let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
let temporizador;
// Função de iniciar o temporizador no clique
function startTemp() {
  // Pegando os valores inseridos nos campos
  let hourInput = document.getElementById("hour-input").value;
  let minInput = document.getElementById("min-input").value;
  let secInput = document.getElementById("sec-input").value;
  // Transferindo os valores para a tela
  if (!running) {
    if (hourInput == "") hours.innerHTML = 0;
    else hours.innerHTML = hourInput;

    if (minInput == "") minutes.innerHTML = 0;
    else {
      if (minInput >= 60) minutes.innerHTML = 59;
      else minutes.innerHTML = minInput;
    }

    if (secInput == "") seconds.innerHTML = 0;
    else {
      if (secInput >= 60) seconds.innerHTML = 59;
      else seconds.innerHTML = secInput;
    }
    temporizador = setInterval(() => {
      reduceSeconds();
    }, 1000);
    running = true;
  } else {
    alert("TEMPORIZADOR JÁ ESTÁ RODANDO, CLIQUE EM 'PARAR' PARA PARAR O TEMPORIZADOR ATUAL");
  }

  //   Limpando os campos de input
  document.getElementById("hour-input").value = "";
  document.getElementById("min-input").value = "";
  document.getElementById("sec-input").value = "";
}

// Função para reduzir os segundos
function reduceSeconds() {
  if (seconds.innerHTML > 0) seconds.innerHTML--;
  else {
    reduceMinutes();
    if (running) seconds.innerHTML = 59;
  }
}

// Função para reduzir os minutos
function reduceMinutes() {
  if (minutes.innerHTML > 0) minutes.innerHTML--;
  else {
    reduceHours();
    if (running) minutes.innerHTML = 59;
  }
}

// Função para reduzir as horas
function reduceHours() {
  if (hours.innerHTML > 0) hours.innerHTML--;
  else {
    stopTemp();
    running = false;
  }
}

// Função para parar e zerar o temporizador
function stopTemp() {
  if (!running) {
    alert("TEMPORIZADOR AINDA NÃO INICIADO");
  } else {
    alert("TEMPORIZADOR ZERADO");
    running = false;
    clearTimeout(temporizador);
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
  }
}
