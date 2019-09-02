let btnCalcular = document.getElementById('btnCalcular');
let btnCalcular2 = document.getElementById('btnCalcular2');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', obtenerArea);
    btnCalcular2.addEventListener('click', obtenerAreaSimplificada);
}

function obtenerArea() {
    console.time('obtenerArea');
    /**Se declara un elemento constante el cual funcionara para obtener el 
     * cálculo de PI
     */
    const pi = 3.14159;
    let radio = Number(document.getElementById('radioCirculo').value);
    resultado = pi * (radio * radio); //r^2;
    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = resultado;
    console.timeEnd('obtenerArea');
}

function obtenerAreaSimplificada() {
    console.time('obtenerAreaSimplificada');
    let radio = Number(document.getElementById('radioCirculo').value);
    let resultado = 0;
    /**Se invoca el objeto "Math" y se utiliza su propiedad "PI", el cual nos manda el valor de dicha constante y su método "pow", que eleva un elemento numerico hacia la potencia que se le solicita */
    resultado = Math.PI * Math.pow(radio, 2);
    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = resultado;
    console.timeEnd('obtenerAreaSimplificada');
}