let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', distancia)
}

function distancia() {
    let puntoAX = Number(document.getElementById('puntoAX').value);
    let puntoAY = Number(document.getElementById('puntoAY').value);
    let puntoBX = Number(document.getElementById('puntoBX').value);
    let puntoBY = Number(document.getElementById('puntoBY').value);

    let resultado = 0;

    resultado = Math.sqrt(Math.pow((puntoBX - puntoAX), 2) + Math.pow((puntoBY - puntoAY), 2));

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;
}