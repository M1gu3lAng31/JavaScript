let btnAgregarNumeros = document.getElementById('btnAgregarNumeros');

eventListener();

function eventListener() {
    btnAgregarNumeros.addEventListener('click', fillArray);
}

function fillArray() {
    // let suma = 0;

    let inputAddElemnt = document.getElementById('elemento');
    let dataArray = [];

    for (let i = 0; i < Number(inputAddElemnt.value); i++) {

        dataArray[i] = Math.floor(Math.random() * 10);
        // console.log(dataArray[i]);
        // suma += dataArray[i];
    }
    operationArray(dataArray);
}

function operationArray(showArray = ['el vector no recibio datos']) {

    let imprimir = "";
    let suma = 0;

    for (let x = 0; x < showArray.length; x++) {
        imprimir += `<li class='list-group-item'>${showArray[x]}</li>`;
        suma += showArray[x];
        console.log(showArray[x]);
    }
    document.getElementById('listaNumeros').innerHTML = imprimir;
    let resultadoSuma = document.getElementById('resultado');
    resultadoSuma.innerHTML = `La suma de los numeros es = ${suma}`;

}