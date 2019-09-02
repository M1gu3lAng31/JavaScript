let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);

    let resultado = 0;

    resultado = Math.sqrt((Math.pow(ladoA, 2)) + (Math.pow(ladoB, 2)));

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = resultado;
}