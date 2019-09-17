let btnSerie = document.getElementById('btnSerie');
let suma = 5,
    contador = 0;

eventListener();

function eventListener() {
    btnSerie.addEventListener('click', calcularSerie);
}

function calcularSerie() {

    while (suma <= 1800) {
        contador++;

        let serieLi = document.createElement('li');
        serieLi.setAttribute('class', 'list-group-item');

        let serieLiTxt = document.createTextNode(suma);
        serieLi.appendChild(serieLiTxt);

        let listaSerie = document.getElementById('listaSerie');
        listaSerie.appendChild(serieLi);

        if (contador % 2 != 0) {
            suma += 2;
        } else {
            suma += 3;
        }

    }

}