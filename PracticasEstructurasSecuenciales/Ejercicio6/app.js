let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', convertir)
}

function convertir() {

    let metros = Number(document.getElementById('metros').value);

    let resultado = 0;

    resultado = metros * 39.37;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;

}