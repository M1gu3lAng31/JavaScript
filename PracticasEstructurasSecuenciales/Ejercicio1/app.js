let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let tiempo = Number(document.getElementById('tiempo').value);
    let velocidad = Number(document.getElementById('velocidad').value);

    let resultado = 0;

    resultado = tiempo * velocidad;

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = resultado;
}