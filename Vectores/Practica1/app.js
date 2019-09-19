let btnAgregarElementos = document.getElementById('btnAgregar');
let btnMostrarElementos = document.getElementById('btnMostrar');

/**Declaración global del vector */
let elementos = [];

/**Declara contador global */
let contador = 0;
eventListener();

function eventListener() {
    btnAgregarElementos.addEventListener('click', agregarElemento);
    btnMostrarElementos.addEventListener('click', mostrarElemento);
}


function agregarElemento() {

    if (contador < 10) {
        let valorInput = document.getElementById('agregarElemento');
        elementos[contador] = valorInput.value;
        valorInput.value = "";
        contador++;
    }
}

function mostrarElemento() {

    let informacionImprimir = "";

    for (let x = 0; x < elementos.length; x++) {
        informacionImprimir += `<li class='list-group-item'> ${elementos[x]} </li>`;
    }
    contador = 0;
    document.getElementById('listaNumeros').innerHTML = informacionImprimir;
}