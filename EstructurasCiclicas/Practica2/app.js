let btnAgregarFG = document.getElementById('btnAgregarFG');
let btnCalcular = document.getElementById('btnCalcular');

let numeroInput = 0;

eventListener();

function eventListener() {
    btnAgregarFG.addEventListener('click', agregarFG);
    btnCalcular.addEventListener('click', calcularPromedio);
}

function calcularPromedio() {


    let suma = 0,
        promedio = 0;

    for (let x = 1; x <= numeroInput; x++) {
        let edad = Number(document.getElementById(`edadAlumno${x}`).value);
        suma += edad;
    }
    promedio = suma / numeroInput;

    let imprimirResultado = document.getElementById('imprimir');
    imprimirResultado.innerHTML = promedio;
}

function agregarFG() {

    numeroInput++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let divFormGroup = document.createElement('div');
    divFormGroup.setAttribute('class', 'form-group');

    let labelFC = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa la edad del alumno ${numeroInput}`);
    labelFC.appendChild(textLabel);

    let inputFC = document.createElement('input');
    inputFC.setAttribute('type', 'number')
    inputFC.setAttribute('class', 'form-control')
    inputFC.setAttribute('placeholder', 'Ingresa la edad del alumno')
    inputFC.setAttribute('id', `edadAlumno${numeroInput}`);

    let cajaAlumnos = document.getElementById('cajaAlumnos');

    cajaAlumnos.appendChild(divRow);

    divRow.appendChild(divCol);
    divCol.appendChild(divFormGroup);
    divFormGroup.appendChild(labelFC);
    divFormGroup.appendChild(inputFC);
}