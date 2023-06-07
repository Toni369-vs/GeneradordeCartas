import "bootstrap";
import "./style.css";

window.onload = function() {};

const values = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
const symbols = ["♦", "♥", "♠", "♣"];

// funciones para generar numeros y simbolos aleatorios

function generateRandomValues() {
  let randomValues = Math.floor(Math.random() * 12);
  return values[randomValues];
}

function generateRandomSymbols() {
  let randomSymbols = Math.floor(Math.random() * 4);
  if (symbols[randomSymbols] === "♥" || symbols[randomSymbols] === "♦") {
    symbols[
      randomSymbols
    ] = `<span style="color: red;">${symbols[randomSymbols]}</span>`;
  }
  return symbols[randomSymbols];
}

// FIN de funciones para generar numeros y simbolos aleatorios

// Se insertan en HTML los valores generados

let value = generateRandomValues();
document.getElementById("center").innerHTML = value;

let symbol = generateRandomSymbols();
document.getElementById("top").innerHTML = symbol;
document.getElementById("botton").innerHTML = symbol;

// FIN de la inserción

// Funcion crear carta con el boton

document.getElementById("btn").addEventListener("click", generateRandomCard);
function generateRandomCard() {}
