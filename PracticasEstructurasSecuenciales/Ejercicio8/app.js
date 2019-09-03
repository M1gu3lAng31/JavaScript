let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let dias = Number(document.getElementById('numDias').value);
    let hotel = Number(document.getElementById('costoHotel').value);
    let comida = Number(document.getElementById('costoComida').value);

    let resultado = 0,
        totalHotel = 0,
        totalComida = 0,
        totalGastos = 0;

    totalHotel = (dias * hotel);
    totalComida = (3 * (dias * comida));
    totalGastos = (dias * 100);

    resultado = totalComida + totalGastos + totalHotel;
    // resultado = ((dias * hotel) + (dias * comida) + (dias * 100));

    let imprimirResultado = document.getElementById('resultado');
    let imprimirHotel = document.getElementById('resultadoHotel');
    let imprimirComida = document.getElementById('resultadoComida');
    let imprimirGastos = document.getElementById('resultadoGastos');

    imprimirResultado.innerHTML = resultado;
    imprimirHotel.innerHTML = totalHotel;
    imprimirComida.innerHTML = totalComida;
    imprimirGastos.innerHTML = totalGastos;
}



/**sacar el volumen luego multiplicar por mil */