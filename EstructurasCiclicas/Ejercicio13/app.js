let btnAgregarCiuidad = document.getElementById('btnAgregarCiuidad');
let contador = 0;
let contadorTienda = 0;
eventListener();

function eventListener() {
    btnAgregarCiuidad.addEventListener('click', agregarCiuidad)
}

function agregarCiuidad() {
    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group mb-3');

    let inputFG = document.createElement('input');
    inputFG.setAttribute('type', 'text');
    inputFG.setAttribute('class', 'form-control');
    inputFG.setAttribute('placeholder', 'Nombre de la ciudad');
    inputFG.setAttribute('id', `claveCiudad${contador}`);

    /**Se añade como hijo para que agrege el boton de agregar Ciudad */
    let inputAppendTienda = document.createElement('div');
    inputAppendTienda.setAttribute('class', 'input-group-append');

    let buttonAgregarTienda = document.createElement('button');
    buttonAgregarTienda.setAttribute('id', `btnAgregarTienda${contador}`);
    let txtButtonAgregarTienda = document.createTextNode('Agregar Tienda');
    buttonAgregarTienda.setAttribute('class', 'btn btn-success');

    let cajaMandilon = document.getElementById('cajaMandilon');

    cajaMandilon.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(inputGroup);
    inputGroup.appendChild(inputFG);
    inputGroup.appendChild(inputAppendTienda);
    inputAppendTienda.appendChild(buttonAgregarTienda);
    buttonAgregarTienda.appendChild(txtButtonAgregarTienda);

    eventListenerAgregarTienda();
}


function eventListenerAgregarTienda() {
    let btnAgregarTienda = document.getElementById(`btnAgregarTienda${contador}`);
    btnAgregarTienda.addEventListener('click', crearInputTienda);
    contadorTienda = 0;

}

function crearInputTienda() {
    contadorTienda++;
    // contador++;

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let formGroup = document.createElement('div');
    formGroup.setAttribute('class', 'input-group mb-3');

    let inputTienda = document.createElement('input');
    inputTienda.setAttribute('type', 'number');
    inputTienda.setAttribute('class', 'form-control');
    inputTienda.setAttribute('placeholder', 'Clave de la tienda');
    inputTienda.setAttribute('id', `Ciudad${contador}claveTienda${contadorTienda}`);

    let cajaMandilon = event.target.parentElement.parentElement.parentElement.parentElement;

    cajaMandilon.appendChild(divCol);
    divCol.appendChild(formGroup);
    formGroup.appendChild(inputTienda);

}