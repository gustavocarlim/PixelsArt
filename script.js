// Requisito 2
let paleta = document.querySelector("#color-palette");

// Requisito 3
let coresDisponiveis = ["yellow", "pink", "green"];

// Requisito 6
let pixelBoard = document.querySelector("#pixel-board");


const randomButton = document.querySelector('#button-random-color');
const colorDivs = [];

for (let cores of coresDisponiveis) {
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

  for (let i = 0; i < coresDisponiveis.length; i++) {
    colorDivs[i].style.backgroundColor = randomColors[i];
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
    for (let i = 0; i < coresDisponiveis.length; i++) {
      colorDivs[i].style.backgroundColor = savedPalette[i];
    }
  }
}


applySavedPaletteFromLocalStorage();


// Requisito 6 e 7
for (let i = 0; i < 5; i +=1){
  const reta = document.createElement("div");
  reta.className = "reta";
  pixelBoard.appendChild(reta);
  
  for (let j = 0; j < 5; j +=1){
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.backgroundColor = "white";
    reta.appendChild(pixel);
  }
}

// Requisito 9
function selecionaCor(event) {
  const coresPaleta = document.querySelectorAll('.color');
  for (let cor of coresPaleta) {
    cor.classList.remove('selected');
  }
  const corSelecionada = event.target;
  corSelecionada.classList.add('selected');
}
const coresPaleta = document.querySelectorAll('.color');
for (let cor of coresPaleta) {
  cor.addEventListener('click', selecionaCor);
}

// Requisito 10
function paintPixel(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}
const pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('click', paintPixel);
}


// Requisito 11
const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = 'white'; 
  }
});

// Requisito 12
function savePixelsToLocalStorage() {
  const pixels = document.querySelectorAll('.pixel');
  const pixelColors = [];
  for (let i = 0; i < pixels.length; i++) {
    pixelColors.push(pixels[i].style.backgroundColor);
  }
  localStorage.setItem("pixelBoard", JSON.stringify(pixelColors));
}
function paintPixel(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
  savePixelsToLocalStorage();
}
function applySavedPixelsFromLocalStorage() {
  const savedPixels = localStorage.getItem("pixelBoard");
  if (savedPixels) {
    const pixelColors = JSON.parse(savedPixels);
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.backgroundColor = pixelColors[i];
    }
  }
}
applySavedPixelsFromLocalStorage();




