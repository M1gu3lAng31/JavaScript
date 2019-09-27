let btnAddArray1 = document.getElementById('btnAddArray1');
let btnAddArray2 = document.getElementById('btnAddArray2');
let btnShowArray = document.getElementById('btnShowArray');
let FirstArray = [];
let SecondArray = [];
let bothArray = [];
let counter = 0;

eventListener();
array1();
array2();

function eventListener() {
    btnShowArray.addEventListener('click', showArray);
    btnAddArray1.addEventListener('click', addArray1);
    btnAddArray2.addEventListener('click', addArray2);
}


function addArray1() {
    let x = 0;
    for (x = 0; x < 5; x++) {
        let valueInput = document.getElementById(`inputWord1-${x}`);
        bothArray[x] = valueInput.value;
    }
    if (x == 5) {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Elementos Agregados',
            showConfirmButton: false,
            timer: 1500
        })

        btnAddArray1.disabled = true;
        for (let i = 0; i < 5; i++) {

        }
    }

}

function addArray2() {

    for (let x = 4; x < 9; x++) {
        let valueInput = document.getElementById(`inputWord2-${counter}`);
        bothArray[x] = valueInput.value;
        counter++;
    }
    if (counter == 5) {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Elementos Agregados',
            showConfirmButton: false,
            timer: 1500
        })

        btnAddArray2.disabled = true;

    }
}

function showArray() {


    for (let j = 0; j < bothArray.length; j++) {

        document.getElementById('boxBothArray').innerHTML += `<li class='list-group-item'>${bothArray[j]}</li>`;
    }


}

function array1() {

    for (let x = 0; x < 5; x++) {

        let divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        let divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        let inputFG = document.createElement('input');
        inputFG.setAttribute('class', 'form-control');
        inputFG.setAttribute('type', 'text');
        inputFG.setAttribute('placeholder', 'Ingresa algo');
        inputFG.setAttribute('id', `inputWord1-${x}`);

        document.getElementById('boxArray1').appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(inputFG);

    }
}

function array2() {
    for (let x = 0; x < 5; x++) {

        let divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        let divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        let inputFG = document.createElement('input');
        inputFG.setAttribute('class', 'form-control');
        inputFG.setAttribute('type', 'text');
        inputFG.setAttribute('placeholder', 'Ingresa algo');
        inputFG.setAttribute('id', `inputWord2-${x}`);

        document.getElementById('boxArray2').appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(inputFG);

    }
}