let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let imprimirResultado = document.getElementById('resultado');

    if (numero1 % numero2 == 0) {
        imprimirResultado.innerHTML = `<h2>El numero ${numero1} es multiplo de ${numero2}</h2>`;
        return;
    }
    if (numero2 % numero1 == 0) {
        imprimirResultado.innerHTML = `<h2>El numero ${numero2} es multiplo de ${numero1}</h2>`;
        return;
    } else {
        imprimirResultado.innerHTML = `<h2>No son multiplos</h2>`;
        return;
    }

}