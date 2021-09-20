// Definindo variáveis iniciais
let cHours = document.getElementById("c-hour");
let cMinutes = document.getElementById("c-minute");
let cSeconds = document.getElementById("c-second");
let cMillseconds = document.getElementById("c-millsec");
let cRunning = false;
let cronometer;
let lapCounter = 0;

// Começa o cronometro
function startCrono() {
  if (!cRunning) {
    cronometer = setInterval(() => {
      addMillSecs();
    }, 10);
    cRunning = true;
  } else alert("CRONOMETRO JÁ ESTÁ RODANDO");
}

// Para o cronometro
function stopCrono() {
  pauseCrono();
  cHours.innerHTML = 0;
  cMinutes.innerHTML = 0;
  cSeconds.innerHTML = 0;
  cMillseconds.innerHTML = 0;
  lapCounter = 0;
}

// Pausa o cronometro
function pauseCrono() {
  clearInterval(cronometer);
  cRunning = false;
}

// Registra a lap
function regLap() {
  lapCounter++;
  let lapcontainer = document.getElementById("c-laps");
  let tempHour = cHours.innerHTML;
  let tempMinute = cMinutes.innerHTML;
  let tempSecond = cSeconds.innerHTML;
  let tempMillSecs = cMillseconds.innerHTML;

  lapcontainer.innerHTML += `<p class="lap-para">Lap ${lapCounter}: ${tempHour}h:${tempMinute}m:${tempSecond}s.${tempMillSecs}ms</p>`;
}

// Decide adicionar mais 10 milisegundos
function addMillSecs() {
  if (cMillseconds.innerHTML < 990) cMillseconds.innerHTML = parseInt(cMillseconds.innerHTML) + 10;
  else {
    cMillseconds.innerHTML = 0;
    addSecs();
  }
}
//  Decide adicionar mais 1 segundo
function addSecs() {
  if (cSeconds.innerHTML < 60) cSeconds.innerHTML++;
  else {
    cSeconds.innerHTML = 0;
    addMinutes();
  }
}

// Decide adicionar mais 1 minuto
function addMinutes() {
  if (cMinutes.innerHTML < 60) cMinutes.innerHTML++;
  else {
    cMinutes.innerHTML = 0;
    addHours();
  }
}

// Adiciona mais 1 hora
function addHours() {
  cHours.innerHTML++;
}
