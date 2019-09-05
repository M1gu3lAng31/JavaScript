let btnComparar = document.getElementById('btnComparar');

eventListener();

function eventListener() {
    btnComparar.addEventListener('click', comparar);
}

function comparar() {
    let numero1 = Number(document.getElementById('numeroA').value);
    let numero2 = Number(document.getElementById('numeroB').value);
    let numero3 = Number(document.getElementById('numeroC').value);
    let imprimirResultado = document.getElementById('resultado');

    if (numero1 == numero2 && numero2 == numero3) {
        imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> Los numeros son iguales</h6>`;
        return;
    }

    if (numero1 > numero2) {
        if (numero1 > numero3) {
            imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> El numero A con el valor ${numero1} es el mayor</h6>`;
        } else {
            imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> El numero C con el valor ${numero3} es el mayor</h6>`;
        }
    } else {
        if (numero2 > numero3) {
            imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> El numero B con el valor ${numero2} es el mayor</h6>`
        } else {
            imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> El numero C con el valor ${numero3} es el mayor</h6>`
        }
    }
}