let btnAgregarElementos = document.getElementById('btnAgregar');
let btnCalcularMedia = document.getElementById('btnCalcularMedia');

/**Declaración global del vector */
let elementos = [];

/**Declara contador global */
let contador = 0;
eventListener();

function eventListener() {
    btnAgregarElementos.addEventListener('click', agregarElemento);
    btnCalcularMedia.addEventListener('click', calcularMedia);
}


function agregarElemento() {

    if (contador < 10) {
        let valorInput = document.getElementById('agregarElemento');
        elementos[contador] = Number(valorInput.value);
        valorInput.value = "";
        console.log(elementos);

        contador++;
    }
}

function calcularMedia() {

    let promedio = 0;

    for (let x = 0; x < elementos.length; x++) {
        promedio += elementos[x];
    }
    promedio /= elementos.length;

    contador = 0;
    elementos = [];
    console.log(promedio);


    let imprimir = `<li class='list-group-item'>El promedio de los numeros es = ${promedio.toFixed(2)}</li>`;

    document.getElementById('listaNumeros').innerHTML = imprimir;

}