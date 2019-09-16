let btnVotar = document.getElementById('btnVotar');
let btnContarVotos = document.getElementById('btnContarVotos');
let contador = 0;

eventListener();

function eventListener() {
    btnVotar.addEventListener('click', agregarVoto);
    btnContarVotos.addEventListener('click', contarVotos);

}

function contarVotos() {
    let votoA = 0,
        votoB = 0,
        votoC = 0,
        votoD = 0,
        votoNulo = 0;

    let imprimirResultado = document.getElementById('resultado');


    for (let x = 1; x <= contador; x++) {
        let valorInput = Number(document.getElementById(`voto${x}`).value);
        if (valorInput == 1) {
            votoA++;
        } else if (valorInput == 2) {
            votoB++;
        } else if (valorInput == 3) {
            votoC++;
        } else if (valorInput == 4) {
            votoD++;
        } else if (valorInput == 0) {
            imprimirResultado.innerHTML = `Votos parar el primer candidato = ${votoA}<hr>
            Votos para el segundo candidato = ${votoB}<hr>
            Votos para el tercer candidato = ${votoC}<hr>
            Votos para el cuarto candidato = ${votoD}<hr>
            Votos nulo = ${votoNulo}<hr>
            Se detuvo la votacion debido a que se encotro un cero en la posición ${x}`;
            return;
        } else {
            votoNulo++;
        }
    }

    imprimirResultado.innerHTML = `Votos parar el primer candidato = ${votoA}<hr>
    Votos para el segundo candidato = ${votoB}<hr>
    Votos para el tercer candidato = ${votoC}<hr>
    Votos para el cuarto candidato = ${votoD}<hr>
    Votos nulo = ${votoNulo}<hr>
    `

}


function agregarVoto() {

    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    labelTxt = document.createTextNode(`Voto numero ${contador}`);
    labelFG.appendChild(labelTxt);

    let inputFG = document.createElement('input');
    inputFG.setAttribute('type', 'number');
    inputFG.setAttribute('class', 'form-control');
    inputFG.setAttribute('placeholder', `Usted es nuestro votante numero `);
    inputFG.setAttribute('id', `voto${contador}`);

    let cajaVotos = document.getElementById('cajaVotos');

    cajaVotos.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(labelFG);
    divFG.appendChild(inputFG);

}