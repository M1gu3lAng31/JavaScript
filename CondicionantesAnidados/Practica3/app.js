let btnCalcular = document.getElementById('btnCalcular');

let calificacion1 = document.getElementById('calificacion1');
let calificacion2 = document.getElementById('calificacion2');
let calificacion3 = document.getElementById('calificacion3');


eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', promedio);
}

function promedio() {

    let imprimirResultado = document.getElementById('reultado');
    let resultado = Number(calificacion1.value) + Number(calificacion2.value) + Number(calificacion3.value);

    /**Esta opereción es similar a escribir "resultado=resultado/3" */
    resultado /= 3;

    if (resultado >= 9) {
        imprimirResultado.innerHTML = `<h2 class="badge badge-pill badge-success">Aprobado. Calificación: ${resultado}</h2>`;
    } else if (resultado < 9 && resultado >= 6) {
        imprimirResultado.innerHTML = `<h2 class="badge badge-pill badge-warning">Regular. Calificación: ${resultado}</h2>`;
    } else {
        imprimirResultado.innerHTML = `<h2 class="badge badge-pill badge-danger">Reprobado. Calificación: ${resultado}</h2>`;
    }

}





// function promedio() {
//     let calificacion1 = Number(document.getElementById('calificacion1').value);
//     let calificacion2 = Number(document.getElementById('calificacion2').value);
//     let calificacion3 = Number(document.getElementById('calificacion3').value);
//     let imprimirResultado = document.getElementById('reultado');

//     let resultado = 0;

//     resultado = ((calificacion1 + calificacion2 + calificacion3) / 3);

//     if (resultado >= 9) {
//         imprimirResultado.innerText = `<h6 class="badge badge-pill badge-success">Aprobado</h6>`;
//         return;
//     }

//     if (resultado >= 6 || resultado < 9) {
//         imprimirResultado.innerText = `<h6 class="badge badge-pill badge-waring">Regular</h6>`;
//         return;
//     }
//      if (resultado < 6) {
//         imprimirResultado.innerText = `<h6 class="badge badge-pill badge-dagner">Reprobado</h6>`;
//         return;
//     }
// }