let inputNumber = document.getElementById('numero');
let imprimirResultado = document.getElementById('resultado');

eventListener();

function eventListener() {
    inputNumber.addEventListener('keypress', calcularCifrasKeypress);
    inputNumber.addEventListener('blur', calcularCifrasBlur)
}

function calcularCifrasKeypress(event) {

    if (event.key == "Enter") {

        if (Number(inputNumber.value) > 999) {
            imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-danger text-center"> Error eRror erRor errOr erroR</h6>`;
        }
        if (Number(inputNumber.value) <= 999) {
            imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> Tiene tres cifra</h6>`;
        }
        if (Number(inputNumber.value) <= 99) {
            imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> Tiene dos cifra</h6>`;
        }
        if (Number(inputNumber.value) <= 9) {
            imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> Tiene una cifra</h6>`;
        }
    }

}

function calcularCifrasBlur() {

    if (Number(inputNumber.value) <= 9) {
        imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> Tiene una cifra</h6>`;
        return;
    }
    if (Number(inputNumber.value) <= 99) {
        imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> Tiene dos cifra</h6>`;
        return;
    }
    if (Number(inputNumber.value) <= 999) {
        imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> Tiene tres cifra</h6>`;
        return;
    }
    if (Number(inputNumber.value) >= 1000) {
        imprimirResultado.innerHTML = `<h6 class="alert alert-dark text-center"> ERRROR</h6>`;
    }

}