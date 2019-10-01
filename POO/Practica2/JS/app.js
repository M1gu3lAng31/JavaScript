let btnAgregarPregunta = document.getElementById('btnAgregarPregunta');
let btnAfavor = document.getElementById('btnAfavor');
let btnContra = document.getElementById('btnContra');
let btnAbstencion = document.getElementById('btnAbstencion');
let btnFinalizar = document.getElementById('btnFinalizar');

let votacion = new ClaseVotacion();


evenListener();

function evenListener() {
    btnAgregarPregunta.addEventListener('click', pasarVotacion);
    btnAfavor.addEventListener('click', conteoVotosFavor);
    btnContra.addEventListener('click', conteoVotosContra);
    btnAbstencion.addEventListener('click', conteoVotosAbstencion);
    btnFinalizar.addEventListener('click', finalizar);
}

function pasarVotacion() {

    let valorInput = String(document.getElementById('inpuntPregunta').value);

    document.getElementById('labelPreguntaVotacion').innerHTML = `<strong>${valorInput}</strong>`;
    document.getElementById('cajaVotacion').style.display = "block";
    document.getElementById('cajaPregunta').style.display = "none";

    return valorInput;
}

function conteoVotosFavor() {
    votacion.votacionesAFavor();
}

function conteoVotosContra() {
    votacion.votacionesEnContra();
}

function conteoVotosAbstencion() {
    votacion.votacionAbstencion();
}

function finalizar(valorInput) {
    let pregunta = "";
    pregunta = pasarVotacion(valorInput);

    votacion.mostrarResultados(pregunta);
    document.getElementById('cajaPregunta').style.display = "block";
    document.getElementById('cajaVotacion').style.display = "none";
}