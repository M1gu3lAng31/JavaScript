let btnCalcular = document.getElementById('btnCalcular');
let ladoA = document.getElementById('ladoA');
let ladoB = document.getElementById('ladoB');
let ladoC = document.getElementById('ladoC');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
    ladoA.addEventListener('blur', validarDatos);
    ladoB.addEventListener('blur', validarDatos);
    ladoC.addEventListener('blur', validarDatos);
}

function validarDatos(event) {

    if (isNaN(event.target.value)) {
        console.log('hago algo pero no lo vez .-.');
        event.target.focus();
    }

    console.log('Entre!! :D');
}

function calcular() {


    let imprimirResultado = document.getElementById('resultado');

    if (Number(ladoA.value) == Number(ladoB.value) && Number(ladoB.value) == Number(ladoC.value)) {
        imprimirResultado.innerText = 'Equilatero';
        console.log('Equilatero');
        return;
    }


    if (Number(ladoA.value) == Number(ladoB.value) && Number(ladoB.value) != Number(ladoC.value) ||
        Number(ladoA.value) == Number(ladoC.value) && Number(ladoC.value) != Number(ladoB.value) ||
        Number(ladoB.value) == Number(ladoC.value) && Number(ladoC.value) != Number(ladoA.value)) {
        imprimirResultado.innerText = 'Isoceles';
        console.log('Isoceles');
        return;
    }

    if (Number(ladoA.value) != Number(ladoB.value) && Number(ladoB) != Number(ladoC.value)) {
        imprimirResultado.innerText = 'Escaleno';
        console.log('Escaleno');
        return;
    }

    console.log('no hago nada :D');



}