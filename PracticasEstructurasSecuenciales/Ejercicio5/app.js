let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {

    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let metroCubico = Number(document.getElementById('cantidadMetros').value);
    let precioCubico = Number(document.getElementById('precioMetros').value);

    let resultado = 0;

    resultado = metroCubico * precioCubico;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;
}