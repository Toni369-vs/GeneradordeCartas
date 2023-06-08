import "bootstrap";
import "./style.css";

window.onload = function() {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  const symbols = ["♦", "♥", "♠", "♣"];

  //INICIO funciones para generar numeros y simbolos aleatorios

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

  // INICIO Se insertan en HTML los valores generados

  let value = generateRandomValues();
  document.getElementById("center").innerHTML = value;

  let symbol = generateRandomSymbols();
  document.getElementById("top").innerHTML = symbol;
  document.getElementById("botton").innerHTML = symbol;

  // FIN de la inserción

  // INICIO FUNCION PARA GENERAR UNA NUEVA CARTA Y BOTON QUE DEFINAN ALTURA Y ANCHO

  const heightInput = document.getElementById("heightInput");
  const widthInput = document.getElementById("widthInput");

  function generateRandomCard() {
    const value = generateRandomValues();
    document.getElementById("center").innerHTML = value;

    const symbol = generateRandomSymbols();
    document.getElementById("top").innerHTML = symbol;
    document.getElementById("botton").innerHTML = symbol;

    if (!isNaN(heightInput.value) && !isNaN(widthInput.value)) {
      document.getElementById("card").style.height = heightInput.value + "px";
      document.getElementById("card").style.width = widthInput.value + "px";
    } else {
      alert(
        "Ingresa un valor numérico para definir la altura y el ancho de la carta"
      );
    }

    heightInput.value = "";
    widthInput.value = "";
  }

  document.getElementById("btn").addEventListener("click", generateRandomCard);

  // FIN FUNCION PARA GENERAR UNA NUEVA CARTA Y BOTON QUE DEFINAN ALTURA Y ANCHO //

  // INICIO METODO PARA GENERAR UNA NUEVA CARTA CADA 10 SEGUNDOS

  setInterval(generateRandomCard, 10000);

  // FIN METODO PARA GENERAR UNA NUEVA CARTA CADA 10 SEGUNDOS
};
