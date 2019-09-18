let btnCalcular = document.getElementById('btnCalcular');
let salario = 1600;

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', calcularSalario);
}

function calcularSalario() {

    let imprimirResultado = document.getElementById('resultado');

    for (let x = 1; x <= 6; x++) {
        salario = salario * 1.10;
        let salarioLi = document.createElement('li');
        salarioLi.setAttribute('class', 'list-group-item');

        let salarioLiTxt = document.createTextNode(`Salario del año ${x} = ${salario.toFixed(2)}`);
        salarioLi.appendChild(salarioLiTxt);

        let listaSalario = document.getElementById('listaSalario');

        listaSalario.appendChild(salarioLi);
    }



}