let btnCalcular = document.getElementById('btnCalcular');
let total = document.getElementById('total');

eventListener();

function eventListener() {
    total.addEventListener('blur', validarDatos);
    btnCalcular.addEventListener('click', calcular);
}

function validarDatos(event) {
    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function calcular() {
    let habraDescuento = document.getElementById('resultadoDescuento');
    let resultadoTotal = document.getElementById('resultado');

    let resultado = 0;

    if (Number(total.value) > 1000) {
        habraDescuento.innerText = 'Aprobado';
        resultado = (Number(total.value) - (Number(total.value) * .2));
    } else {
        habraDescuento.innerText = 'Negado';
        resultado = Number(total.value);
    }
    resultadoTotal.innerText = resultado;
}