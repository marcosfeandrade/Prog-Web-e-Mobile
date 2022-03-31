let inputReal = document.getElementById("valor-real");
let inputDolar = document.getElementById("valor-dolar");
let inputTaxa = document.querySelector(".taxa-input");


inputReal.disabled = true;
inputDolar.disabled = true;

function bloqueiaTaxa () {
  document.querySelector(".taxa-button").disabled = true;
  inputTaxa.disabled = true;
  inputReal.disabled = false;
  inputDolar.disabled = false;

}

function resetaTaxa() {
  document.querySelector(".taxa-button").disabled = false;
  document.querySelector(".taxa-input").disabled = false;
}

/*function converterParaDolar() {
  if(realInput.value < 0 || realInput.value == null){
    alert('Erro. Preencha o campo vazio.');
  }
}

function converterParaReal() {
  
}*/