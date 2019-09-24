let btnAgregarNombre = document.getElementById('btnAgregarNombre');
let btnCalcularLonguitudNombres = document.getElementById('btnCalcularLonguitudNombres');
let contador = 0;

eventListener();

function eventListener() {
    btnAgregarNombre.addEventListener('click', agregarNombre);
    btnCalcularLonguitudNombres.addEventListener('click', longuitudNombres);
}


function longuitudNombres() {

    let vectorNombres = [];
    let vectorLonguitud = [];
    let imprimir = "";

    for (let x = 0; x < contador; x++) {
        let nombreInput = document.getElementById(`nombre${x}`);
        vectorNombres[x] = nombreInput.value;
    }

    for (let i = 0; i < contador; i++) {
        vectorLonguitud[i] = vectorNombres[i].length;
    }

    for (let y = 0; y < contador; y++) {
        imprimir += `<li class='list-group-item'>El nombre ${vectorNombres[y]} tiene ${vectorLonguitud[y]} letras</li>`;
    }

    document.getElementById('cajaNombresLonguitud').innerHTML = imprimir;


}



function agregarNombre() {

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    let inputFG = document.createElement('input');
    inputFG.setAttribute('class', 'form-control');
    inputFG.setAttribute('placeholder', 'Ingresa un nombre');
    inputFG.setAttribute('id', `nombre${contador}`);

    document.getElementById('cajaNombres').appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(inputFG);
    contador++;

}