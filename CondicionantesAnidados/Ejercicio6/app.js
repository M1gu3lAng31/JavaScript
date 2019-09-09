let btnCalcular = document.getElementById('btnCalcular');
let presupuesto = document.getElementById('presupuesto');
let articulo1 = document.getElementById('articulo1');
let articulo2 = document.getElementById('articulo2');
let articulo3 = document.getElementById('articulo3');
let articulo4 = document.getElementById('articulo4');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let imprimirResultado = document.getElementById('resultado');
    let resultado = 0;
    let diferencia = 0;



    resultado = Number(articulo1.value) + Number(articulo2.value) + Number(articulo3.value) + Number(articulo4.value);
    diferencia = Math.abs(resultado - Number(presupuesto.value));

    if (resultado > Number(presupuesto.value)) {
        imprimirResultado.innerHTML = `<h3 class="badge badge-pill badge-danger">Te has paso del presupuesto por $${diferencia}.00 </h3>`;
        return;
    } else {
        resultado = resultado - Number(presupuesto);
        imprimirResultado.innerHTML = `<h3 class="badge badge-pill badge-success">Esta dentro del presupuesto te sobran $${diferencia}.00 </h3>`;
        return;
    }


}