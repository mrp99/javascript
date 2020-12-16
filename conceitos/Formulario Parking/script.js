let modeloCarro ="";
let placaCarro ="";

function getCarro(){
    modeloCarro = document.getElementById('valor1').value;
    document.getElementById('valorDigitado1').innerHTML = modeloCarro;

    placaCarro = document.getElementById('valor2').value;
    document.getElementById('valorDigitado2').innerHTML = placaCarro;
}