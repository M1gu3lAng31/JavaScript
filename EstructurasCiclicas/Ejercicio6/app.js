let btnPagoMes = document.getElementById('btnPagoMes');

eventListener();

function eventListener() {
    btnPagoMes.addEventListener('click', agregarPago);

}

function agregarPago() {
    let pago = 10;

    for (let x = 0; x < 20; x++) {
        let pagoLi = document.createElement('li');
        pagoLi.setAttribute('class', 'list-group-item');

        pago = pago * 2;
        let liTxt = document.createTextNode(pago);
        pagoLi.appendChild(liTxt);

        let listaPagos = document.getElementById('listaPagos');

        listaPagos.appendChild(pagoLi);
    }

}