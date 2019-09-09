let btnPrecio = document.getElementById('btnPrecio');
let horas = document.getElementById('horas');

eventListener();

function eventListener() {
    btnPrecio.addEventListener('click', precio);
}

function precio() {
    let resultado = 0;
    let imprimirResultado = document.getElementById('resultado');

    if (Number(horas.value) <= 2) {
        resultado = Number(horas.value) * 5;
        imprimirResultado.innerHTML = `<h4> Tu tiempo fue de ${Number(horas.value)}. Total a pagar ${resultado}</h4>`;
        return;
    }
    if (Number(horas.value) <= 3 && Number(horas.value) > 2) {
        resultado = Number(horas.value) * 4;
        imprimirResultado.innerHTML = `<h4> Tu tiempo fue de ${Number(horas.value)}. Total a pagar ${resultado}</h4>`;
        return;
    }
    if (Number(horas.value) >= 5 && Number(horas.value) < 10) {
        resultado = Number(horas.value) * 4;
        imprimirResultado.innerHTML = `<h4> Tu tiempo fue de ${Number(horas.value)}. Total a pagar ${resultado}</h4>`;
        return;
    }

    if (Number(horas.value) >= 10) {
        resultado = Number(horas.value) * 2;
        imprimirResultado.innerHTML = `<h4> Tu tiempo fue de ${Number(horas.value)} horas. Total a pagar ${resultado}</h4>`;
        return;
    }




}