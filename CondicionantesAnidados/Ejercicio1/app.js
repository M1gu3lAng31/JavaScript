let btnCalcular = document.getElementById('btnCalcular');
let precioTraje = document.getElementById('costoTraje');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', descuento)
}

function descuento() {
    let imprimirResultado = document.getElementById('resultado');
    let resultado = 0;

    if (Number(precioTraje.value) > 3600) {
        resultado = (Number(precioTraje.value) * .16) - (Number(precioTraje.value));
        imprimirResultado.innerHTML = `<h2>El traje tiene un 16% de descuento. Total a pagar $${Math.abs(resultado)}.00</h2>`;
    } else {
        resultado = (Number(precioTraje.value) * .07) - (Number(precioTraje.value));
        imprimirResultado.innerHTML = `<h2>El traje tiene un 7% de descuento. Total a pagar $${Math.abs(resultado)}.00</h2>`;
    }
}