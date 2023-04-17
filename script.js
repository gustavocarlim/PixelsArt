const botao = document.getElementById("button-random-color");
const cores = document.getElementsByClassName("color");
const paleta = document.getElementById("color-palette");

botao.addEventListener("click", () => {
  cores[0].style.backgroundColor = "black";
  for (let index = 1; index < cores.length; index += 1) {
    const randomColor = getRandomColor();
    cores[index].style.backgroundColor = randomColor;
  }
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}