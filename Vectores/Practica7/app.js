let btnGenerarVector = document.getElementById('btnGenerarVector');
let multiplo = 1;

eventListener();

function eventListener() {
    btnGenerarVector.addEventListener('click', CrearLlenarVector);
}

function CrearLlenarVector() {

    let tamañoVector = Number(document.getElementById('inpTamañoVector').value);
    let rellenoVector = Number(document.getElementById('inpMultiNumero').value);
    let vector = [];
    let imprimirResultado = "";

    for (let x = 0; x < tamañoVector; x++) {
        vector[x] = rellenoVector * multiplo;
        multiplo++;
        imprimirResultado = `<li list-group-item mt-2>${vector[x]}</li>`;
    }


    document.getElementById('listaVector').innerHTML = imprimirResultado;
}