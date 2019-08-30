// Esta linea crea una variable la cual se encarga de obtener por 
// medio del OBJETO document el elemnto button con el id "btnCalcular".
let btnCalcular = document.getElementById('btnCalcular');


// Por medio del método "addEventListener" se le asigno el evento
// clic al elemnto button y al momento de ejecutar dicho evento se 
// ejecutara la funcion suma.
btnCalcular.addEventListener('click', suma);

// Bloque de codigo que se ejecuta hasta cuando se manda a llamar 
// o se invoca, mientras no sea invocada no realizara ninguna acción 
// en el codigo.
function suma() {

    // Se obtendra los valores de los inputs por medio del metodo
    // value
    let num1 = document.getElementById('numero1').value;
    let num2 = document.getElementById('numero2').value;


    /** Se reasigna el valor de las variables (num1 y num2) convirtiendolo 
     * de string a number */
    num1 = Number(num1);
    num2 = Number(num2);

    // Se declara la variable resultado y se inicializa con valor 
    // de 0
    let resultado = 0;

    // Despues de obtener los datos de los elementos Input se realiza
    // el proceso de suma y se le asigna dicho valor a la variable resultado
    resultado = num1 + num2;

    /** Se asigno el a la variable "imprimirResultado" el elemento 
     *  ID resultado.
     */
    let imprimirResultado = document.getElementById('resultado');

    /** Por medio del metodo "InnerHtml" se asigna el valor de la 
     * variable resultado para que se pueda imprimir en el elemento. 
     */
    imprimirResultado.innerHTML = resultado;
}


// consola();

// function consola() {
//     console.log('XYZ');
// }