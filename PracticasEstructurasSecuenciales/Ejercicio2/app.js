let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let correctas = Number(document.getElementById('correctas').value);
    let mal = Number(document.getElementById('mal').value);

    let resultado = 0;

    resultado = ((correctas * 4) - (mal * 1));

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = resultado;
}