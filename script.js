const botao = document.getElementById("button-random-color");
const cores = document.getElementsByClassName("color");
const paleta = document.getElementById("color-palette");
const bordaDePixel = document.getElementById("pixel-board")

for (let i = 0; i < 5; i++) {
  const linha = document.createElement('div');
  linha.className = 'pixel-line';
  for (let j = 0; j < 5; j++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    linha.appendChild(pixel);
  } 
  bordaDePixel.appendChild(linha);
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
}

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

