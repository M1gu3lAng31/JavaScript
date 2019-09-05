let btnCalcular = document.getElementById('btnCalcular');
let produccion = document.getElementById('produccion');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
    produccion.addEventListener('blur', validarDatos);
}

function validarDatos(event) {
    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function calcular() {

    let imprimirResultado = document.getElementById('resultado');

    if (Number(produccion.value) > 100) {
        imprimirResultado.innerText = 'Aprobado. Buen Trabajo';
    } else {
        imprimirResultado.innerText = 'Negado. Trabaja Mas';
    }


}