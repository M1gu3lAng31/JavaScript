let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click', obtenerArea);
}

function obtenerArea() {

    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB'.value));
    let ladoC = Number(document.getElementById('ladoC').value);


    let areaTriangulo = 0,
        areaRectangulo = 0,
        resultado = 0;

    areaRectangulo = ladoB * ladoC;
    areaTriangulo = (((ladoA - ladoC) * ladoB) / 2);
    resultado = areaRectangulo + areaTriangulo;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;

}