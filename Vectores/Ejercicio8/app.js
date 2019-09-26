let btnCalculate = document.getElementById('btnCalculate');
let average = 0;

eventListener();

function eventListener() {
    btnCalculate.addEventListener('click', calculateAll);
}

function calculateAll() {
    let arrayNumber = [];
    let size = Number(document.getElementById('inputSizeArray').value);
    let temp = 0;

    for (let x = 0; x < size; x++) {
        arrayNumber[x] = Math.floor(Math.random() * 5 + 1);
    }

    for (let y = 0; y < size; y++) {
        for (let j = 0; j < size - 1; j++) {
            if (arrayNumber[j] < arrayNumber[j + 1]) {
                temp = arrayNumber[j];
                arrayNumber[j] = arrayNumber[j + 1];
                arrayNumber[j + 1] = temp;
            }
        }
    }

    for (let i = size - 1; i >= 0; i--) {
        document.getElementById('boxArray').innerHTML += `<li class='list-group-item'>${arrayNumber[i]}</li>`
    }

    arrayMedia(arrayNumber, size);
    arrayMediana(arrayNumber, size);
    arrayModa(arrayNumber, size);
    arrayVarianza(arrayNumber, size);
    arrayDesviacionEstandar(arrayNumber, size);
}

function arrayMedia(arrayMedia = [0], sizeMedia) {
    let sum = 0;

    for (let x = 0; x < sizeMedia; x++) {
        sum += arrayMedia[x];
    }

    average = sum / sizeMedia;

    document.getElementById('boxMedia').innerHTML = `<h6>La media es = ${average}</h6><hr>`;

}

function arrayMediana(arrayMediana = [0], sizeMediana) {

    let mediana = 0;

    for (let x = 0; x < sizeMediana; x++) {
        if (sizeMediana % 2 != 0) {
            document.getElementById('boxMediana').innerHTML = `<h6>La mediana es = ${arrayMediana[x/2]}</h6><hr>`;
        } else {
            mediana = ((arrayMediana[sizeMediana / 2] + arrayMediana[(sizeMediana / 2) - 1]) / 2);
            document.getElementById('boxMediana').innerHTML = `<h6>La mediana es = ${mediana}</h6><hr>`;
        }
    }
}

function arrayModa(arrayModa = [], sizeModa) {

    let arrayCounter = [];
    let positionArray = 0;

    for (let x = 0; x < sizeModa; x++) {
        arrayCounter[x] = 0;
    }

    for (let i = 0; i < sizeModa; i++) {
        pivote = arrayModa[i];
        positionArray = i;
        for (let j = 0; j < sizeModa; j++) {
            if (arrayModa[j] == pivote) {
                arrayCounter[positionArray]++;
            }
        }
    }

    let higher = arrayCounter[0];
    let higherPotition = 0;
    for (let y = 0; y < sizeModa; y++) {
        if (arrayCounter[y] > higher) {
            higherPotition = y;
            higher = arrayCounter[y];
        }
    }

    document.getElementById('boxModa').innerHTML = `<h6>La moda es = ${arrayModa[higherPotition]}</h6><hr>`


}

function arrayVarianza(arrayVarianza = [], sizeVarianza) {

    let variaznza = 0,
        totalVarianza = 0;

    for (let x = 0; x < sizeVarianza; x++) {

        variaznza += Math.pow((arrayVarianza[x] - average), 2)

    }
    totalVarianza = variaznza / sizeVarianza;
    document.getElementById('boxVarianza').innerHTML = `<h6>La varianza es = ${totalVarianza.toFixed(2)}</h6><hr>`;
}

function arrayDesviacionEstandar(arrayDE = [], sizeDE) {

    let desviacionEstandar = 0,
        totalDesviacionEstandar = 0;

    for (let x = 0; x < sizeDE; x++) {
        desviacionEstandar += Math.pow((arrayDE[x] - average), 2);
    }

    totalDesviacionEstandar = Math.sqrt((desviacionEstandar / sizeDE));

    console.log(totalDesviacionEstandar);
    document.getElementById('boxDesviacionEstandar').innerHTML = `<h6>La desviacion estandar es = ${totalDesviacionEstandar.toFixed(2)}</h6><hr>`

}