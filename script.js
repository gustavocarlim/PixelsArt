// Requisito 2
let cores = document.querySelector("#color-palette");


let coresDisponiveis = ["red", "yellow", "pink", "green"];

for (let i = 0; i < coresDisponiveis.length; i++) {
  let cor = coresDisponiveis[i];
  { 
    let corElemento = document.createElement("div");
    corElemento.className = "color";
    corElemento.style.backgroundColor = cor;
    corElemento.style.border = "1px solid black";
    cores.appendChild(corElemento);
  }
}