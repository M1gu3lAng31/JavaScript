let btnCalcular = document.getElementById('btnCalcular');


/**Se invoca función "eventlistener" */
eventListener();


/** Se crea la funición "eventListener" para encapsular los 
 * objetos que llevaran el metodo de "eventListener"
 */
function eventListener() {
    btnCalcular.addEventListener('click', obtenerArea);
}

function obtenerArea() {
    /**Se obtiene el valor de los Inputs y se convierte a su tipo de dato
     * number y se le asigna el valor a la variable correspondiente
     */
    let base = Number(document.getElementById('base').value);
    let altura = Number(document.getElementById('altura').value);

    let resultado = 0;

    resultado = (base * altura) / 2;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;
}