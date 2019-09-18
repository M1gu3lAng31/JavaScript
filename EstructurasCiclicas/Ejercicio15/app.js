let btnAhorro = document.getElementById('btnAhorro');
let ahorro = 3;
eventListener();

function eventListener() {
    btnAhorro.addEventListener('click', calcularAhorro);
}

function calcularAhorro() {

    for (let x = 1; x <= 365; x++) {
        let ahorroLi = document.createElement('li');
        ahorroLi.setAttribute('class', 'list-group-item');

        let ahorroLiTxt = document.createTextNode(ahorro);
        ahorroLi.appendChild(ahorroLiTxt);

        let listaAhorro = document.getElementById('listaAhorro');


        ahorro = ahorro * 3;
        listaAhorro.appendChild(ahorroLi);

    }




}