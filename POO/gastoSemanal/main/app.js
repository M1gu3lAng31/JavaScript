const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

eventListener();

function eventListener() {
    formulario.addEventListener('submit', guardarPresupuesto);
    document.addEventListener('DOMContentLoaded', iniciarAplicacion);
}

function guardarPresupuesto(event) {
    event.preventDefault();

    const nombreGasto = document.querySelector('#gasto');
    const cantidadGasto = document.querySelector('#cantidad');

    nombreGasto.disabled = true;
    cantidadGasto.disabled = true;

    const ui = new Interfaz();

    if (isNaN(cantidadGasto.value)) {
        ui.imprimirMensaje('Solo datos numericos en cantidad', 'error', nombreGasto, cantidadGasto);
        return;
    }

    if (nombreGasto === '' || cantidadGasto.value === "") {
        ui.imprimirMensaje('Completa los campos', 'error', nombreGasto, cantidadGasto);
        return
    }
    ui.imprimirMensaje('Todo Correcto', 'correcto', nombreGasto, cantidadGasto);
    ui.agregarGastoListado(nombreGasto.value, cantidadGasto.value);
    ui.presupuestoRestante(cantidadGasto.value);
}

async function iniciarAplicacion() {
    const { value: presupuestoInicial } = await Swal.fire({
        title: '¿Cuanto dinero llevas?',
        input: 'text',
        inputPlaceholder: 'Ingresa el dinero '
    })

    if (!presupuestoInicial) {
        window.location.reload();
        return;
    }

    if (isNaN(presupuestoInicial)) {
        window.location.reload();
        return;
    }

    cantidadPresupuesto = new Presupuesto(presupuestoInicial);
    const ui = new Interfaz();
    ui.insertarPresupuesto(cantidadPresupuesto.presupuesto)
}