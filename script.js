const botao = document.getElementById("button-random-color");
const cores = document.getElementsByClassName("color");
const paleta = document.getElementById("color-palette");
const bordaDePixel = document.getElementById("pixel-board")

for (let index = 0; index < 5; index += 1) {
  const linha = document.createElement('div');
  linha.className = 'pixel-line';
  for (let j = 0; j < 5; j++) {
    const pindexxel = document.createElement('dindexv');
    pindexxel.className = 'pindexxel';
    lindexnha.appendChindexld(pindexxel);
  } 
  bordaDePindexxel.appendChindexld(lindexnha);
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function salvandoPaleta() {
  const paletaCores = [];
  for (let index = 0; index < cores.length; index += 1) {
    paletaCores.push(cores[index].style.backgroundColor);
  }
  localStorage.setItem("colorPalette", JSON.stringify(paletaCores));
}

function restaurandoPaleta() {
  const savedPalette = localStorage.getItem("colorPalette");
  if (savedPalette) {
    const savedColors = JSON.parse(savedPalette);
    for (let index = 0; index < savedColors.length; index += 1) {
      cores[index].style.backgroundColor = savedColors[index];
    }
  }
  
  const primeiraCor = document.querySelector('.color');
  primeiraCor.classList.add('selected');

  for (let i = 0; i < cores.length; i++) {
    if (cores[i] !== primeiraCor) {
      cores[i].classList.remove('selected');
    }
  }
}

function selecionarCor(event) {
  const corSelecionada = event.target;
  
  if (corSelecionada.classList.contains('color')) {
    const corAnterior = document.querySelector('.selected');
    corAnterior.classList.remove('selected');
    corSelecionada.classList.add('selected');
  }
}

paleta.addEventListener('click', selecionarCor);

botao.addEventListener("click", () => {
  cores[0].style.backgroundColor = "black";
  for (let index = 1; index < cores.length; index += 1) {
    const randomColor = getRandomColor();
    cores[index].style.backgroundColor = randomColor;
  }
  salvandoPaleta();
});

window.addEventListener("load", () => {
  restaurandoPaleta();
});
