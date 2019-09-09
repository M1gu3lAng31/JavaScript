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
    if (!isNaN(event.target.value)) {
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
    let diferencia = 0;

    diferencia = Math.abs(Number(edad1.value) - Number(edad2.value));

    if (Number(edad1.value) == Number(edad2.value)) {
        resultadoImprimir.innerHTML =
            `<h4>${nombre1.value} y ${nombre2.value} tienen la misma edad </h4>`;
        return;
    }

    if (Number(edad1.value) > Number(edad2.value)) {
        resultadoImprimir.innerHTML = `<h4>La persona mayor es ${nombre1.value} con ${diferencia} años de diferencia</h4>`; //nombre1.value``;
    } else {
        resultadoImprimir.innerHTML = `<h4>La persona mayor es ${nombre2.value} con ${diferencia} años de diferencia</h4>`;
    }
}