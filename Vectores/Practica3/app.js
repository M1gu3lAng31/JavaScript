let btnAgregarElemetno = document.getElementById('btnAgregarElemento');
let elementos = [];
let contador = 0;

eventListener();

function eventListener() {
    btnAgregarElemetno.addEventListener('click', agregarElemetno);
}


function agregarElemetno() {

    let valorInput = document.getElementById('elemento');
    // let valorInput = Number(document.getElementById('elemento').value);
    let x = 0;

    for (x = 0; x < elementos.length; x++) {
        if (Number(valorInput.value) === elementos[x]) {

            console.log('nooooooo');

            return

        }
    }
    elementos[x] = Number(valorInput.value);

    let imprimir = "";

    for (let i = 0; i < elementos.length; i++) {
        imprimir += `<li class='list-group-item'>${elementos[i]}</li>`
    }

    document.getElementById('listaNumeros').innerHTML = imprimir;
}