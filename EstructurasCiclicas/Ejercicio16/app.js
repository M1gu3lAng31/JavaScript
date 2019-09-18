let btnAgregarAuto = document.getElementById('btnAgregarAuto');
let btnCalcular = document.getElementById('btnCalcular');
let contador = 0;

eventListener();

function eventListener() {
    btnAgregarAuto.addEventListener('click', agregarAuto);
    btnCalcular.addEventListener('click', calcular);

}

function calcular() {

    let impuestosA = 0,
        totalImpuestosA = 0,
        impuestosB = 0,
        totalImpuestosB = 0,
        impuestosC = 0,
        totalImpuestosC = 0,
        total = 0;
    let imprimirResultado = document.getElementById('resultado');

    for (let x = 1; x <= contador; x++) {

        let valorInputClave = Number(document.getElementById(`claveAuto${x}`).value);
        let valorInputPrecio = Number(document.getElementById(`precioAuto${x}`).value);

        if (valorInputClave == 1) {
            impuestosA = valorInputPrecio * .1;
            totalImpuestosA += impuestosA;
            console.log(valorInputPrecio);

        } else if (valorInputClave == 2) {
            impuestosB = valorInputPrecio * .07;
            totalImpuestosB += impuestosB;
        } else if (valorInputClave == 3) {
            totalImpuestosC = valorInputPrecio * .05;
            totalImpuestosC += impuestosC;
        }
    }
    total = totalImpuestosC + totalImpuestosA + totalImpuestosB;
    imprimirResultado.innerHTML = `Impuestos de Clave 1 = ${totalImpuestosA}<hr>
        Impuestos de Clave 2 = ${totalImpuestosB}<hr>
        Impuestos de Clave 3 = ${totalImpuestosC}<hr>
        Total de impuestos a pagar = ${total}`;



}



function agregarAuto() {
    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-4');

    let divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    let labelTxt = document.createTextNode('Clave del Auto');
    labelFG.appendChild(labelTxt);

    let inputFG = document.createElement('input');
    inputFG.setAttribute('type', 'number');
    inputFG.setAttribute('class', 'form-control');
    inputFG.setAttribute('placeholder', 'Clave del Auto');
    inputFG.setAttribute('id', `claveAuto${contador}`);

    // 
    let divRow2 = document.createElement('div');
    divRow2.setAttribute('class', 'row');

    let divCol2 = document.createElement('div');
    divCol2.setAttribute('class', 'col-8');

    let divFG2 = document.createElement('div');
    divFG2.setAttribute('class', 'form-group');

    let labelFG2 = document.createElement('label');
    let labelTxt2 = document.createTextNode('Precio del auto');
    labelFG2.appendChild(labelTxt2);

    let inputFG2 = document.createElement('input');
    inputFG2.setAttribute('type', 'number');
    inputFG2.setAttribute('class', 'form-control');
    inputFG2.setAttribute('placeholder', 'Clave del Auto');
    inputFG2.setAttribute('id', `precioAuto${contador}`);

    let cajaAutos = document.getElementById('cajaAutos');

    cajaAutos.appendChild(divRow);
    cajaAutos.appendChild(divRow2);
    divRow.appendChild(divCol);
    divRow.appendChild(divCol2);
    divCol.appendChild(divFG);
    divCol2.appendChild(divFG2);
    divFG.appendChild(labelFG);
    divFG2.appendChild(labelFG2);
    divFG.appendChild(inputFG);
    divFG2.appendChild(inputFG2);
}