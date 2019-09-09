let btnOrdenar = document.getElementById('btnOrdenar');
let numero1 = document.getElementById('numeroA');
let numero2 = document.getElementById('numeroB');
let numero3 = document.getElementById('numeroC');

eventListener();

function eventListener() {
    btnOrdenar.addEventListener('click', ordenar);

}

function ordenar() {
    let imprimirResultado = document.getElementById('resultado');

    if (Number(numero1.value) > Number(numero2.value) && Number(numero1.value) > Number(numero3.value)) {
        if (Number(numero2.value) > Number(numero3.value)) {
            imprimirResultado.innerHTML = `<h4>Ordenados Descendente ${Number(numero1.value)}--${Number(numero2.value)}--${Number(numero3.value)}</h4>`;
            return;
        } else {
            imprimirResultado.innerHTML = `<h4>Ordenados Descendente ${Number(numero1.value)}--${Number(numero3.value)}--${Number(numero2.value)}</h4>`;
            return;
        }
    }

    if (Number(numero2.value) > Number(numero3.value) && Number(numero2.value) > Number(numero1.value)) {
        if (Number(numero1.value) > Number(numero3.value)) {
            imprimirResultado.innerHTML = `<h4>Ordenados Descendente ${Number(numero2.value)}--${Number(numero1.value)}--${Number(numero3.value)}</h4>`;
            return;
        } else {
            imprimirResultado.innerHTML = `<h4>Ordenados Descendente ${Number(numero2.value)}--${Number(numero3.value)}--${Number(numero1.value)}</h4>`;
            return;
        }
    }
    if (Number(numero3.value) > Number(numero2.value) && Number(numero3.value) > Number(numero1.value)) {
        if (Number(numero2.value) > Number(numero1.value)) {
            imprimirResultado.innerHTML = `<h4>Ordenados Descendente ${Number(numero3.value)}--${Number(numero2.value)}--${Number(numero1.value)}</h4>`;
            return;
        } else {
            imprimirResultado.innerHTML = `<h4>Ordenados Descendente ${Number(numero3.value)}--${Number(numero1.value)}--${Number(numero2.value)}</h4>`;
            return;
        }
    }
}