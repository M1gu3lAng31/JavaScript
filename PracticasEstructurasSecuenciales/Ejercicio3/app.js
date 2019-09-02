let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);

    let resultado = 0;
    let semiperimetro = 0;

    semiperimetro = ((ladoA + ladoB + ladoC) / 2);
    resultado = Math.sqrt(semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC));


    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = resultado;


}