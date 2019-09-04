let btnCalcular = document.getElementById('btnCalcular');
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');

eventListener();

function eventListener() {

    /**Se esta asignando el evento change al Input que pertenece el Id "numero1" */
    numero1.addEventListener('blur', validarDatos);
    numero2.addEventListener('blur', validarDatos);
    btnCalcular.addEventListener('click', comparar);
}


/**Estamos recibiendo el parametro event debido al que metodo "addEventListener" esta 
 * invocado la función validar datos.
 */
function validarDatos(event) {

    console.log(event.target.value);
    // console.log(isNaN(numero1.value));

    /**Se utilizo la función "isNaN" para comprobar si el valor obtenido es un número,
     * en caso de que no sea un número, se utilizo el metodo focus para no permitir 
     * al usuario cambiar de Input.
     */
    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function comparar() {

    let imprmirResultado = document.getElementById('resultado');

    if (Number(numero1.value) == Number(numero2.value)) {
        imprmirResultado.innerText = 'El A numero es igual al numero B';
        return;
    }

    if (Number(numero1.value) > Number(numero2.value)) {
        imprmirResultado.innerText = 'El A numero es mayor';
    } else {
        imprmirResultado.innerText = 'El B numero es mayor';
    }


}