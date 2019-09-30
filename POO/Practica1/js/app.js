let btnCalcular = document.getElementById('btnCalcular');
let contador = 1;


eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

async function calcular() {

    let velocidad = Number(document.getElementById('inputVelocidad').value);
    let grados = Number(document.getElementById('inputGrados').value);
    let proyectil = new Proyectil(velocidad, grados);

    // if (contador == 1) {
    //     contador++;
    if (grados < 89) {
        for (let tiempo = 0; tiempo <= 50; tiempo += .01) {
            let posicionX = proyectil.calcularVelocidadX(tiempo);
            let posicionY = proyectil.calcularVelocidadY(tiempo);

            console.log('X ' + posicionX + 'Y ' + posicionY);

            if (posicionX >= 0 && posicionY >= 0 && posicionX <= 99 && posicionY <= 99) {
                await stop(proyectil, posicionX, posicionY);
                // proyectil.crearSpan(posicionX, posicionY);
            }
        }
    } else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'los grados tienen que ser entre 0 y 90',
        })

    }
    // } else {
    // Swal.fire({
    //     position: 'top-end',
    //     type: 'success',
    //     title: 'Recargando La pagina',
    //     showConfirmButton: false,
    //     timer: 1500
    // })
    //     document.getElementById('').remove();
    //     contador = 1;
    // }
}

function stop(proyectil, posicionX, posicionY) {
    // let proyectil = new Proyectil(velocidad, grados);

    return new Promise((res, rej) => {
        setTimeout(() => res(proyectil.crearSpan(posicionX, posicionY), 200));
    })
}