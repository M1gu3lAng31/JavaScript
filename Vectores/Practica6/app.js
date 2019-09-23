let btnCalculateArray = document.getElementById('btnCalculateArray');
let btnAddElement = document.getElementById('btnAddElements');
let counterClickAddElemnet = 0;

eventListener();

function eventListener() {
    btnAddElement.addEventListener('click', addElement);
    btnCalculateArray.addEventListener('click', calculateArray);
}


function addElement() {

    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'list-group-item mb-2');

    let input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    // input.setAttribute('type', 'number');
    input.setAttribute('placeholder', 'Inserte un digito');
    input.setAttribute('id', `listArrayRight${counterClickAddElemnet}`);

    document.getElementById('arrayList1').appendChild(newLi);
    newLi.appendChild(input);


    /** Segunda Columnas */

    let newLi2 = document.createElement('li');
    newLi2.setAttribute('class', 'list-group-item mb-2');

    let input2 = document.createElement('input');
    input2.setAttribute('class', 'form-control');
    // input2.setAttribute('type', 'number');
    input2.setAttribute('placeholder', 'Inserte un digito');
    input2.setAttribute('id', `listArrayLeft${counterClickAddElemnet}`);

    document.getElementById('arrayList2').appendChild(newLi2);
    newLi2.appendChild(input2);



    counterClickAddElemnet++;
}


function calculateArray() {

    let vector1 = [],
        vector2 = [],
        vector3 = [];
    let concatenarResultado = "";

    for (let i = 0; i < counterClickAddElemnet; i++) {
        vector1[i] = Number(document.getElementById(`listArrayRight${i}`).value);
        vector2[i] = Number(document.getElementById(`listArrayLeft${i}`).value);

        if (isNaN(vector1[i]) || isNaN(vector2[i])) {
            Swal.fire({
                type: 'error',
                title: 'CARACTER INVALIDO',
                text: 'Se ha ingresado un digito incorrecto'
            })

            vector1 = [];
            vector2 = [];
            document.getElementById(`listArrayRight${i}`).focus();
            return;
        }
    }

    for (let x = 0; x < vector1.length; x++) {
        vector3[x] = vector1[x] + vector2[x];
    }

    for (let y = 0; y < vector1.length; y++) {
        concatenarResultado += `<li class='list-group-item mt-2'>${vector3[y]}</li>`;
    }

    document.getElementById('arrayList3').innerHTML = concatenarResultado;
}