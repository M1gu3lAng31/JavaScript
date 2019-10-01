let btnAgregarPregunta = document.getElementById('btnAgregarPregunta');
let btnAfavor = document.getElementById('btnAfavor');
let btnContra = document.getElementById('btnContra');
let btnAbstencion = document.getElementById('btnAbstencion');
let btnFinalizar = document.getElementById('btnFinalizar');

let favor = 0,
    contra = 0,
    abstencion = 0;


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
}

function conteoVotosFavor() {
    let votacion = new ClaseVotacion(favor);

    let totalVotacionAFavor = votacion.votacionesAFavor();
    favor += totalVotacionAFavor;
    console.log(favor);
}

function conteoVotosContra() {
    let votacion = new ClaseVotacion();

    let totalVotacionEnContra = votacion.votacionesEnContra();
    contra += totalVotacionEnContra;
    console.log(contra);
}

function conteoVotosAbstencion() {
    let votacion = new ClaseVotacion();

    let conteoVotosAbstencion = votacion.votacionAbstencion();
    abstencion += conteoVotosAbstencion;
    console.log(abstencion);
}

function finalizar() {
    Swal.fire({
        title: 'Las votaciones fueron',
        text: `Favor = ${favor}  Contra = ${contra}  Abstenidos = ${abstencion}`
    })
    document.getElementById('cajaPregunta').style.display = "block";
    document.getElementById('cajaVotacion').style.display = "none";
}