let btnAgregarNumero = document.getElementById('btnAgregarNumero');
let btnCalcular = document.getElementById('btnCalcular');
let contador = 0,
    mayoraCero = 0,
    menoraCero = 0,
    igualaCero = 0;


eventListener();

function eventListener() {
    btnAgregarNumero.addEventListener('click', agregarNumero);
    btnCalcular.addEventListener('click', mayorMenor);
}

function agregarNumero() {
    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    let labelTxt = document.createTextNode('Ingresa un Número');
    labelFG.appendChild(labelTxt);

    let inputNumeroFG = document.createElement('input');
    inputNumeroFG.setAttribute('type', 'number');
    inputNumeroFG.setAttribute('class', 'form-control');
    inputNumeroFG.setAttribute('placeholder', 'Ingresa el número que quieras');
    inputNumeroFG.setAttribute('id', `numero${contador}`);

    let cajaNumero = document.getElementById('cajaNumeros');

    cajaNumero.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(labelFG);
    divFG.appendChild(inputNumeroFG);

}

function mayorMenor() {
    let imprimirResultado = document.getElementById('resultado');
    console.log('hola');

    for (let x = 1; x <= contador; x++) {
        let valorInput = Number(document.getElementById(`numero${x}`).value);

        if (valorInput == 0) {
            igualaCero++;
        } else if (valorInput > 0) {
            mayoraCero++;
        } else {
            menoraCero++;
        }
    }

    imprimirResultado.innerHTML = `<h4>Mayores a cero son: ${mayoraCero} <br> 
    Menores a cero: ${menoraCero}<br>Iguales a cero: ${igualaCero}</h4>`;

}