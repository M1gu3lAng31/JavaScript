let btnAgregar = document.getElementById('btnAgregar');
let contador = 0;

eventListener();

function eventListener() {
    btnAgregar.addEventListener('click', agregarAhorro);
}

function agregarAhorro() {

    if (contador < 12) {
        contador++;
        let ahorro = Number(document.getElementById('ahorroMensual').value);
        let spanAhorro = document.createElement('span');
        spanAhorro.setAttribute('id', `ahorroMensual${contador}`);
        let textoSpan = document.createTextNode(`${ahorro}`);
        spanAhorro.appendChild(textoSpan);

        let imprimirSpan = document.getElementById(`mes${contador}`);
        imprimirSpan.appendChild(spanAhorro);
    }
    calcularAhorro();

}

function calcularAhorro() {
    let imprimirAhorroTotal = document.getElementById('total');
    let suma = 0;
    for (let i = 1; i <= contador; i++) {
        let valorObtenido = Number(document.getElementById(`ahorroMensual${contador}`).textContent);
        suma += valorObtenido;
    }

    // let spanTotal = document.createElement('span');
    // let textoTotal = document.createTextNode(suma);
    // spanTotal.appendChild(textoTotal);
    // imprimirAhorroTotal.appendChild(spanTotal);
    // console.log(suma);

    imprimirAhorroTotal.innerHTML = `<span>Total: ${suma}</span>`;

}