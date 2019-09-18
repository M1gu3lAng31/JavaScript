let btnAgregarEmpresa = document.getElementById('btnAgregar');
let btnCalcular = document.getElementById('btnCalcular');
let contador = 0;
eventListener();

function eventListener() {
    btnAgregarEmpresa.addEventListener('click', agregarEmpresa);
    btnCalcular.addEventListener('click', calcular);
}


function calcular() {

    let totalAnual = 0;
    let mayorProduccion = 0;
    let clave;
    let imprimirResultado = document.getElementById('resultadoMayorProduccion');

    for (let x = 1; x <= contador; x++) {
        let valorInputClave = document.getElementById(`claveEmpresa${x}`);
        clave = valorInputClave.value;
        for (let i = 1; i <= 12; i++) {
            let valorInputProduccion = Number(document.getElementById(`mes${i}Empresa${x}`).value);
            totalAnual += valorInputProduccion;

            if (mayorProduccion < totalAnual) {
                mayorProduccion = totalAnual;
                imprimirResultado.innerHTML = `La clave de la empresa con mayor producción anual  es ${clave} con ${mayorProduccion} de produccion`;
            }
            if (i == 7) {
                if (valorInputProduccion >= 3000000) {
                    let empresaLiJulio = document.createElement('li');
                    empresaLiJulio.setAttribute('class', 'list-group-item');
                    let empresaLiJulioTxt = document.createTextNode(`Clave: ${clave}`);
                    empresaLiJulio.appendChild(empresaLiJulioTxt);
                    let listaEmpresasJulio = document.getElementById('listaEmpresasJulio');
                    listaEmpresasJulio.appendChild(empresaLiJulio);
                }
            }
        }

        let empresaLi = document.createElement('li');
        empresaLi.setAttribute('class', 'list-group-item');
        let empresaLiTxt = document.createTextNode(`La empresa con Clave ${clave}. Su total anual de producción es = ${totalAnual}`);
        empresaLi.appendChild(empresaLiTxt);
        let listaEmpresas = document.getElementById('listaEmpresas');
        listaEmpresas.appendChild(empresaLi);
        totalAnual = 0;
    }


}



function agregarEmpresa() {
    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    labelFGTxt = document.createTextNode('Clave Empresa');
    labelFG.appendChild(labelFGTxt);

    let inputFG = document.createElement('input');
    inputFG.setAttribute('type', 'text');
    inputFG.setAttribute('class', 'form-control');
    inputFG.setAttribute('placeholder', 'Clave de la Empresa');
    inputFG.setAttribute('id', `claveEmpresa${contador}`);

    let cajaFabricas = document.getElementById('cajaFabricas');


    cajaFabricas.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(labelFG);
    divFG.appendChild(inputFG);
    /** Creacion de meses */
    for (let x = 1; x <= 12; x++) {

        let divRow2 = document.createElement('div');
        divRow2.setAttribute('class', 'row');

        let divCol2 = document.createElement('div');
        divCol2.setAttribute('class', 'col-8');

        let divFG2 = document.createElement('div');
        divFG2.setAttribute('class', 'form-group');

        let labelFG2 = document.createElement('label');
        let labelTxt2 = document.createTextNode('Mes');
        labelFG2.appendChild(labelTxt2);

        let inputFG2 = document.createElement('input');
        inputFG2.setAttribute('type', 'number');
        inputFG2.setAttribute('class', 'form-control');
        inputFG2.setAttribute('placeholder', `mes ${x}`);
        inputFG2.setAttribute('id', `mes${x}Empresa${contador}`);

        cajaFabricas.appendChild(divRow2);
        divRow.appendChild(divCol2);
        divCol2.appendChild(divFG2);
        divFG2.appendChild(labelFG2);
        divFG2.appendChild(inputFG2);
    }

}