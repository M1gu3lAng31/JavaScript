let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let numero = Number(document.getElementById('numero').value);
    let imprimirResultado = document.getElementById('resultado');

    switch (numero) {
        case (1):
            imprimirResultado.innerHTML = `<h4>Es Lunes</h4>`;
            return;

    }


}