const botao = document.getElementById("button-random-color");
const cores = document.getElementsByClassName("color");
const paleta = document.getElementById("color-palette");

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
    for (let i = 0; i < savedColors.length; i++) {
      cores[i].style.backgroundColor = savedColors[i];
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
