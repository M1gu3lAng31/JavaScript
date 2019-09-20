let btnGenerarNumeros = document.getElementById('btnGenerarNumeros');

eventListener();

function eventListener() {
    btnGenerarNumeros.addEventListener('click', fillArray);
}


/* ======================================
    Comienza aplicacion de con el metodo fuerza bruta
   ======================================= */
function fillArray() {
    let maximo = 0;

    let inputValue = Number(document.getElementById('tamañoVector').value);
    let arrayPrimeNumbers = [];
    let contador = 0;

    console.time('InicioFuerzaBruta');
    for (let x = 0; x < inputValue; x++) {
        let numberPrimeRandom = isPrime();
        contador++;


        if (numberPrimeRandom === null) {
            x--;
        } else {
            arrayPrimeNumbers[x] = numberPrimeRandom;
        }
        console.log(arrayPrimeNumbers[x]);
    }
    console.timeEnd('InicioFuerzaBruta');
    console.log('contador ' + contador);

    for (let i = 0; i < arrayPrimeNumbers.length; i++) {
        if (maximo < arrayPrimeNumbers[i]) {
            maximo = arrayPrimeNumbers[i];
        }
    }

    console.log('Maximo ' + maximo);


}

function isPrime() {

    let numberRandom = (Math.floor(Math.random() * 10000) + 1);

    for (let i = 2; i < numberRandom; i++) {

        if (numberRandom % i == 0) {
            return null;
        }
        return numberRandom;
    }

}
/* ======================================
    Termina fuerza bruta
======================================= */

/* ======================================
    Inicia aplicación resuleta de manera dinamica
   ======================================= */

// let arrayNumbersDinamyc = [];

// function fillArrayDinamyc() {

//     let primeNumber = 0;
//     for (let i = 0; i < primeNumber; i++) {
//         primeNumber++;
//         if (primeNumber % i == 0) {
//             arrayNumbersDinamyc.push = primeNumber;
//         }
//     }

// }