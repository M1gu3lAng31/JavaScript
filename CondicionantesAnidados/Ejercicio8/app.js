let btnCalcular = document.getElementById('btnCalcular');
let cali1 = document.getElementById('calificacion1');
let cali2 = document.getElementById('calificacion2');
let cali3 = document.getElementById('calificacion3');
let cali4 = document.getElementById('calificacion4');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}


function calcular() {
    let cali1 = Number(document.getElementById('calificacion1').value);
    let cali2 = Number(document.getElementById('calificacion2').value);
    let cali3 = Number(document.getElementById('calificacion3').value);
    let cali4 = Number(document.getElementById('calificacion4').value);


    let imprimirResultado = document.getElementById('resultado');
    let resultado = 0;

    if (cali1 >= cali2 && cali1 >= cali3 && cali1 >= cali4) {
        resultado = ((cali2 + cali3 + cali4) / 3);
        imprimirResultado.innerHTML = `La calificación eliminadad es ${cali1}. Tu promedio es de ${resultado}`;
        return;
    }
    if (cali2 >= cali1 && cali2 >= cali3 && cali2 >= cali4) {
        resultado = ((cali1 + cali3 + cali4) / 3);
        imprimirResultado.innerHTML = `La calificación eliminadad es ${cali2}. Tu promedio es de ${resultado}`;
        return;
    }
    if (cali3 >= cali1 && cali3 >= cali2 && cali3 >= cali4) {
        resultado = ((cali1 + cali2 + cali4) / 3);
        imprimirResultado.innerHTML = `La calificación eliminadad es ${cali3}. Tu promedio es de ${resultado}`;
        return;
    }
    if (cali4 >= cali1 && cali4 >= cali3 && cali4 >= cali2) {
        resultado = ((cali1 + cali2 + cali3) / 3);
        imprimirResultado.innerHTML = `La calificación eliminadad es ${cali2}. Tu promedio es de ${resultado}`;
        return;
    }



}