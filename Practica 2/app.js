let btnPrecio = document.getElementById('btnPrecio');

btnPrecio.addEventListener('click', precio);

function precio() {
    let metroCuadraro = document.getElementById('metroCuadrado').value;
    let precioxMetro = document.getElementById('precioxMetro').value;

    metroCuadraro = Number(metroCuadraro);
    precioxMetro = Number(precioxMetro);

    let resultado = 0;

    resultado = metroCuadraro * precioxMetro;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;

}