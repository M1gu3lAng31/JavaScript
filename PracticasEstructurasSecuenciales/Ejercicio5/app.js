let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {

    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let largo = Number(document.getElementById('largo').value);
    let ancho = Number(document.getElementById('ancho').value);
    let profundidad = Number(document.getElementById('profundidad').value);
    let precioLitro = Number(document.getElementById('precioLitro').value);

    let resultado = 0,
        total = 0;

    resultado = ((largo * ancho * profundidad) * 1000);
    total = resultado * precioLitro;

    let imprimirResultado = document.getElementById('resultado');
    let imprimirPrecio = document.getElementById('resultadoPrecio')

    imprimirResultado.innerHTML = resultado;
    imprimirPrecio.innerHTML = total;

}