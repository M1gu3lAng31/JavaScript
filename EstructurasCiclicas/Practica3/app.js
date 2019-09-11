let btnCalcular = document.getElementById('btnCalcular');
let btnAgregar = document.getElementById('btnAgregar');

let numeroInput = 0;

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', promedio);
    btnAgregar.addEventListener('click', agregar);
}

function promedio() {

    let suma = 0,
        promedio = 0;

    for (let i = 1; i <= numeroInput; i++) {
        let estatura = Number(document.getElementById(`estatura${i}`).value);
        suma = suma + estatura;
    }
    let imprimirResultado = document.getElementById('resultado');

    promedio = suma / numeroInput;
    imprimirResultado.innerHTML = `El promedio de estaturas es: ${promedio}`;


}


function agregar() {

    numeroInput++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    let labelTxt = document.createTextNode(`Ingrese la estatura en ${numeroInput} m`);
    labelFG.appendChild(labelTxt);

    let inputFG = document.createElement('input');
    inputFG.setAttribute('type', 'number');
    inputFG.setAttribute('class', 'form-control');
    inputFG.setAttribute('placeholder', `Ingrese la estatura del alumno ${numeroInput} m`)
    inputFG.setAttribute('id', `estatura${numeroInput}`);

    let cajaPromedio = document.getElementById('cajaPromedio');

    cajaPromedio.appendChild(divRow);

    divRow.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(labelFG);
    divFG.appendChild(inputFG);
}