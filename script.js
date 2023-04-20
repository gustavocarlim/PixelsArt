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
  savePaletteToLocalStorage(randomColors) // Requisito 5
}); 


// Requisito 5
function savePaletteToLocalStorage(palette) {
  const paletteString = JSON.stringify(palette);
  localStorage.setItem("colorPalette", paletteString);
}


function getSavedPaletteFromLocalStorage() {
  const savedPalette = localStorage.getItem("colorPalette");
  if (savedPalette) {
    return JSON.parse(savedPalette);
  }
}

function applySavedPaletteFromLocalStorage() {
  const savedPalette = getSavedPaletteFromLocalStorage();
  if (savedPalette && savedPalette.length > 0) {
    for (let i = 1; i < coresDisponiveis.length; i++) {
      colorDivs[i].style.backgroundColor = savedPalette[i-1];
    }
  }
}


applySavedPaletteFromLocalStorage();
