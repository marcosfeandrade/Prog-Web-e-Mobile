let inputReal = document.getElementById("valor-real");
let inputDolar = document.getElementById("valor-dolar");
let inputTaxa = document.querySelector(".taxa-input");

let buttonConfirmar = document.querySelector(".taxa-button");
let buttonReset = document.querySelector(".reset-taxa-button");
let buttonToDolar = document.querySelector(".real-to-dolar-button");
let buttonToReal = document.querySelector(".dolar-to-real-button");

let dolar = 0;
let real = 0;
let taxa = 0;

inputReal.disabled = true;
inputDolar.disabled = true;

buttonConfirmar.disabled = false;
buttonReset.disabled = true;
buttonToDolar.disabled = true;
buttonToReal.disabled = true;

function bloqueiaTaxa () {
  if(inputTaxa.value <= 0 || inputTaxa.value == null){
    alert('Erro. Campo preenchido incorretamente.');
    return;
  }
  taxa = inputTaxa.value;
  inputTaxa.disabled = true;
  inputReal.disabled = false;
  inputDolar.disabled = false;
  buttonReset.disabled = false;
  buttonConfirmar.disabled = true;
  buttonToDolar.disabled = false;
  buttonToReal.disabled = false;
}

function resetaTaxa() {
  document.querySelector(".taxa-button").disabled = false;
  document.querySelector(".taxa-input").disabled = false;

  taxa = 0;
  inputDolar.value = null;
  inputReal.value = null;
  inputTaxa.value = 0;
  inputTaxa.disabled = false;
  inputReal.disabled = true;
  inputDolar.disabled = true;
  buttonReset.disabled = true;
  buttonConfirmar.disabled = false;
  buttonToDolar.disabled = true;
  buttonToReal.disabled = true;
}

function converterParaDolar() {
  if(inputReal.value <= 0 || inputReal.value == null){
    alert('Erro. Campo preenchido incorretamente.');
    return;
  }
  real = inputReal.value;
  inputDolar.value = real / taxa;
}

function converterParaReal() {
  if(inputDolar.value <= 0 || inputDolar.value == null){
    alert('Erro. Campo preenchido incorretamente.');
    return;
  }
  dolar = inputDolar.value;
  inputReal.value = dolar * taxa;
}