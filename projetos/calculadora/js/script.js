let num1;
let num2;
let resultado;
let calcType;
let getNum = document.getElementById("visor");

// Adicionar numero ao visor
function calcNum(element) {
  switch (getNum.value) {
    case "+":
      getNum.value = element;
      break;
    case "-":
      getNum.value = element;
      break;
    case "*":
      getNum.value = element;
      break;
    case "/":
      getNum.value = element;
      break;
    default:
      getNum.value += element;
  }
}

function calcOperator(element) {
  if (element != "=") {
    calcType = element;
    if (num1 == undefined) {
      num1 = parseFloat(getNum.value);
    } else if (num2 == undefined) {
      num2 = parseFloat(getNum.value);
    } else {
      calcResults(calcType);
    }
    getNum.value = element;
  } else {
    if (num1 == undefined) {
      getNum.value = "Erro. Numero 1 não definido";
    } else if (num2 == undefined) {
      num2 = parseFloat(getNum.value);
      calcResults(calcType);
    }
  }
}

function calcResults(element) {
  switch (element) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
  }
  getNum.value = resultado;
  clearOperatorButtons();
}

function calcClear() {
  getNum.value = "";
  num1 = undefined;
  num2 = undefined;
  resultado = undefined;
  typeCalc = "";
}

function clearOperatorButtons() {
  let buttons = document.getElementsByClassName("operator");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
  setTimeout(restoreOperatorButtons, 500);
}

function restoreOperatorButtons() {
  let buttons = document.getElementsByClassName("operator");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "block";
  }
  calcClear();
}
