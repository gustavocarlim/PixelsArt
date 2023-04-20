// Requisito 2
let paleta = document.querySelector("#color-palette");

// Requisito 3
let coresDisponiveis = ["black", "yellow", "pink", "green"];


const randomButton = document.querySelector('#button-random-color');
const colorDivs = [];

for (cores of coresDisponiveis) {
  const colorDiv = document.createElement('div');
  colorDiv.className = 'color';
  colorDiv.style.backgroundColor = cores;
  paleta.appendChild(colorDiv);
  colorDivs.push(colorDiv);
}


// Requisito 4
randomButton.addEventListener('click', () => {
  const randomColors = [];
  for (let i = 0; i < 3; i++) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    randomColors.push(`rgb(${red}, ${green}, ${blue})`);
  }

  for (let i = 1; i < coresDisponiveis.length; i++) {
    colorDivs[i].style.backgroundColor = randomColors[i-1];
  }
});