let btnCalcular = document.getElementById('btnCalcular');
let edadA = document.getElementById('hermanoA');
let edadB = document.getElementById('hermanoB');


eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
    edadA.addEventListener('blur', validarDatos);
    edadB.addEventListener('blur', validarDatos);
}

function validarDatos(event) {
    if (isNaN(event.target.value)) {
        event.target.focus();
    }

}

function calcular() {
    // let edadA = Number(document.getElementById('hermanoA').value);
    // let edadB = Number(document.getElementById('hermanoB').value);
    let imprimirResultadoMayor = document.getElementById('resultadoMayor');


    let resultadoEdad = 0,
        resultadoDiferencia = 0;


    resultadoDiferencia = Math.abs((Number(edadA.value) - Number(edadB.value)));

    let imprimirResultadoDiferencia = document.getElementById('resultadoDiferencias');

    imprimirResultadoDiferencia.innerText = resultadoDiferencia;
    if (Number(edadA.value) == Number(edadB.value)) {
        imprimirResultadoMayor.innerText = 'Los hermanos tienen la misma edad';

        return;
    }

    if (Number(edadA.value) > Number(edadB.value)) {
        imprimirResultadoMayor.innerText = 'El hermano A es mayor';
    } else {
        imprimirResultadoMayor.innerText = 'El hermano B es mayor';
    }


}