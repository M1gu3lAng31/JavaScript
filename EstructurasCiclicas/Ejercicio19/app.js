let btnCalcular = document.getElementById('btnCalcular');
let btnAgregar = document.getElementById('btnAgregarNumero');

let contador = 0;

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
    btnAgregar.addEventListener('click', agregar);

}

function agregar() {
    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    let labelTxt = document.createTextNode(`Ingresa un valor`);
    labelFG.appendChild(labelTxt);

    let inputFG = document.createElement('input');
    inputFG.setAttribute('type', 'number');
    inputFG.setAttribute('class', 'form-control');
    inputFG.setAttribute('placeholder', 'Ingresa un valor');
    inputFG.setAttribute('id', `numero${contador}`);

    let cajaNumeros = document.getElementById('cajaNumeros');

    cajaNumeros.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(labelFG);
    divFG.appendChild(inputFG);


}

function calcular() {

    let numerosPositivos = 0,
        promedioPositivos = 0,
        totalPositivos = 0,
        promedioGeneral = 0,
        totalGeneral = 0;

    let imprimirResultado = document.getElementById('resultado');

    for (let x = 1; x <= contador; x++) {
        let valorInput = Number(document.getElementById(`numero${x}`).value);

        if (valorInput > 0) {
            numerosPositivos++;
            totalPositivos += valorInput;
        }
        totalGeneral += valorInput;

        promedioPositivos = totalPositivos / numerosPositivos;
        promedioGeneral = totalGeneral / contador;
    }

    imprimirResultado.innerHTML = `El total de numeros positivos es = ${numerosPositivos}<hr>
    El promedio de los numeros positivos es = ${promedioPositivos}<hr>
    El promedio general es = ${promedioGeneral}`;

}