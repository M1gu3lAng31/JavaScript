let btnAgregarArticulo = document.getElementById('btnAgregarArticulo');
let btnCalcularTotal = document.getElementById('btnCalcularTotal');
let contador = 0,
    contadorPrecioArticulo = 0;

eventListener();

function eventListener() {
    btnAgregarArticulo.addEventListener('click', agregarInputArticulo);
    btnCalcularTotal.addEventListener('click', calcularTotal);

}

function agregarInputArticulo() {

    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group mb-3');

    let inputArticulo = document.createElement('input');
    inputArticulo.setAttribute('type', 'text');
    inputArticulo.setAttribute('class', 'form-control');
    inputArticulo.setAttribute('placeholder', 'Ingresa el nombre del articulo');

    let inputGroupAppend = document.createElement('div');
    inputGroupAppend.setAttribute('class', 'input-group-append');

    let buttonAgregarPrecio = document.createElement('button');
    buttonAgregarPrecio.setAttribute('id', `btnAgregarPrecio${contador}`);
    let txtbuttonAgregarPrecio = document.createTextNode('Agregar Precio');
    buttonAgregarPrecio.setAttribute('class', 'btn btn-success');

    let listaArticulos = document.getElementById('listaArticulos');

    listaArticulos.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(inputGroup);
    inputGroup.appendChild(inputArticulo);
    inputGroup.appendChild(inputGroupAppend);
    inputGroupAppend.appendChild(buttonAgregarPrecio);
    buttonAgregarPrecio.appendChild(txtbuttonAgregarPrecio);

    eventListenerAgregarPrecio();
}

function eventListenerAgregarPrecio() {
    let btnAgregarPrecio = document.getElementById(`btnAgregarPrecio${contador}`);
    btnAgregarPrecio.addEventListener('click', crearInputPrecio);

}

function crearInputPrecio(event) {

    contadorPrecioArticulo++;

    event.target.setAttribute('disabled', 'true');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let formGroup = document.createElement('div');
    formGroup.setAttribute('class', 'input-group mb-3');

    let inputPrecioArticulo = document.createElement('input');
    inputPrecioArticulo.setAttribute('type', 'number');
    inputPrecioArticulo.setAttribute('class', 'form-control');
    inputPrecioArticulo.setAttribute('placeholder', 'Ingresa el precio del articulo');
    inputPrecioArticulo.setAttribute('id', `valorArticulo${contadorPrecioArticulo}`);

    let listaArticulos = event.target.parentElement.parentElement.parentElement.parentElement;

    listaArticulos.appendChild(divCol);
    divCol.appendChild(formGroup);
    formGroup.appendChild(inputPrecioArticulo);

}

function calcularTotal() {
    let suma = 0;
    let imprimirResultado = document.getElementById('resultado');

    for (let i = 1; i <= contadorPrecioArticulo; i++) {
        let valorInput = Number(document.getElementById(`valorArticulo${i}`).value);

        if (valorInput >= 200) {
            suma += valorInput * .85;
        } else if (valorInput < 200 && valorInput >= 100) {
            suma += valorInput * .88;
        } else {
            suma += valorInput * .90;
        }

    }

    imprimirResultado.innerHTML = `<h4>El total es: $${suma}</h4>`;
}