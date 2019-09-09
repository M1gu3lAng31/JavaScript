let btnCalcular = document.getElementById('btnCalcular');
let presupuesto = document.getElementById('presupuesto');
let articulo1 = document.getElementById('articulo1');
let articulo2 = document.getElementById('articulo2');
let articulo3 = document.getElementById('articulo3');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let imprimirResultado = document.getElementById('resultado');
    let resultado = 0;

    resultado = Number(articulo1.value) + Number(articulo2.value) + Number(articulo3.value);

    if (resultado > Number(presupuesto.value)) {
        imprimirResultado.innerHTML = `<h3>Te has paso del presupuesto por ${resultado} </h3>`;
        return;
    } else {
        resultado = resultado - Number(presupuesto);
        imprimirResultado.innerHTML = `<h3>Esta dentro del presupuesto te sobran ${resultado} </h3>`;
        return;
    }


}