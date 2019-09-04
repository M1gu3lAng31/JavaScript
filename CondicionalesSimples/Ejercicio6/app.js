let btnCalcular = document.getElementById('btnCalcular');
let edad1 = document.getElementById('edad1');
let edad2 = document.getElementById('edad2');
let nombre1 = document.getElementById('nombre1');
let nombre2 = document.getElementById('nombre2');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
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