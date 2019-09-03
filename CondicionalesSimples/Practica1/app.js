let btnVerificar = document.getElementById('btnVerificar');

eventListener();

function eventListener() {
    btnVerificar.addEventListener('click', verificar);
}

function verificar() {
    let calificacion = Number(document.getElementById('calificacion').value);
    let imprimirResultado = document.getElementById('resultado');

    if (calificacion > 8) {
        imprimirResultado.innerHTML = 'Aprobado';
    } else {
        let audio = document.getElementById('audio');
        audio.play();
        imprimirResultado.innerHTML = 'Reprobado';
    }
}