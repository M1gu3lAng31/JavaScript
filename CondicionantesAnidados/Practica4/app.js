let btnCalcular = document.getElementById('btnCalcular');
let personas = document.getElementById('numPersonas');

eventListener();

function eventListener() {
    personas.addEventListener('blur', validarDatos);
    btnCalcular.addEventListener('click', calcularPresupuesto);
}

function validarDatos(event) {

    if (isNaN(event.target.value)) {
        event.target.focus();
        btnCalcular.disabled = true;
    } else {
        btnCalcular.disabled = false;
    }


}

function calcularPresupuesto() {
    let imprimirResultado = document.getElementById('resultado');

    let resultado = 0;

    if (Number(personas.value) > 200 && Number(personas.value) <= 300) {
        resultado = Number(personas.value) * 8;
        imprimirResultado.innerHTML = `<h4>El costo por platillo es de $85.00. Por lo tanto, El presupuesto para ${personas} personas es de $${resultado}.00</h4>`;
        return;
    }

    if (Number(personas.value) > 300) {
        resultado = Number(personas.value) * 75;
        imprimirResultado.innerHTML = `<h4>El presupuesto para ${personas} personas es de $ ${resultado}.00</h4>`;
        return;
    }

    if (Number(personas.value) <= 200) {
        resultado = Number(personas.value) * 95;
        imprimirResultado.innerHTML = `<h4>El presupuesto para ${Number(personas.value)} personas es de $ ${resultado}.00</h4>`;
        return;
    }
}