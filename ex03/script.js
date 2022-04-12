let i = 0;
let button = document.getElementById("numero");
let hex = 0;


function acrescentar(event) {
    event.preventDefault();
    if (event.target.classList[0] == "click-box") {
        const item = event.target;
        const count = item.children[1];
        count.innerHTML = parseInt(count.innerHTML) + 1;
      } else {
        const item = event.target.parentElement;
        const count = item.children[1];
        count.innerHTML = parseInt(count.innerHTML) + 1;
      }
}

function zerar(event) {
    event.preventDefault();
    if (event.target.classList[0] == "click-box") {
        const item = event.target;
        const count = item.children[1];
        count.innerHTML = -1;
      } else {
        const item = event.target.parentElement;
        const count = item.children[1];
        count.innerHTML = -1;
      }
}

function criar() {
    const nome = document.getElementById("nome").value;
    const contador = document.createElement("div");
    if(nome.length == 0) {
        alert("Valor inválido!");
        return;
    }
    
    // Gerando div
    contador.innerHTML = `
    <div class="click-box" onclick="acrescentar(event)">
        <p class="nome-div">${nome}</p>
        <p class="valor" id="valor">0</p>
        <button class="button" id="zerar" onclick="zerar(event)">Zerar</button>
    </div>
    `;

    // Atualizando fundo
    let cor = colorirFundo();
    contador.style.background = cor;

    document.getElementById("contadores").appendChild(contador);
}

function colorirFundo() {
    return (
        "#" +
        parseInt(Math.random() * 0xffffff)
          .toString(16)
          .padStart(6, "0")
      );
}