let btnCalcular = document.getElementById('btnCalcular');
let clave = document.getElementById('clave');
let nombreArt = document.getElementById('nombreArticulo');
let precioArt = document.getElementById('precioArticulo');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {

    let imprimirResultado = document.getElementById('resultadoPrecioDescuento');
    let ImprimirNombreArt = document.getElementById('resultadoNombre');
    let ImprimirClave = document.getElementById('resultadoClave');
    let ImprimirPrecioArt = document.getElementById('resultadoPrecio');

    let resultado = 0;

    ImprimirNombreArt.innerText = nombreArt.value;
    ImprimirClave.innerText = clave.value;
    ImprimirPrecioArt.innerText = precioArt.value;

    if (clave.value == '01') {
        resultado = (Number(precioArt.value) - (Number(precioArt.value) * .1));
        imprimirResultado.innerText = resultado;
        return;
    }
    if (clave.value == '02') {
        resultado = (Number(precioArt.value) - (Number(precioArt.value) * .2));
        imprimirResultado.innerText = resultado;
        return;
    }


}