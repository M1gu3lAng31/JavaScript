let btnCalcular = document.getElementById('btnCalcular');
let edad1 = document.getElementById('edad1');
let edad2 = document.getElementById('edad2');
let nombre1 = document.getElementById('nombre1');
let nombre2 = document.getElementById('nombre2');

eventListener();

function eventListener() {
    nombre1.addEventListener('blur', validarDatosLetras);
    nombre2.addEventListener('blur', validarDatosLetras);
    edad1.addEventListener('blur', validarDatosNumeros);
    edad2.addEventListener('blur', validarDatosNumeros);
    btnCalcular.addEventListener('click', calcular);
}


function validarDatosLetras(event) {
    if (isNaN(event.target.value)) {

    } else {
        event.target.focus();
    }
}

function validarDatosNumeros() {
    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function calcular() {


    let resultadoImprimir = document.getElementById('resultado');

    if (Number(edad1.value) == Number(edad2.value)) {
        resultadoImprimir.innerText = 'Tienen la misma edad .-.';
        return;
    }

    if (Number(edad1.value) > Number(edad2.value)) {
        resultadoImprimir.innerText = nombre1.value;
    } else {
        resultadoImprimir.innerText = nombre2.value;
    }
}