let btnFillArray = document.getElementById('btnFillArray');
let operation1 = document.getElementById('operation1');
let operation2 = document.getElementById('operation2');
let operation3 = document.getElementById('operation3');
let arrayNumber1 = [],
    arrayNumber2 = [];

eventListener();


function eventListener() {
    operation1.addEventListener('click', operationA);
    operation2.addEventListener('click', operationB);
    operation3.addEventListener('click', operationC);
}




function operationA() {

    document.getElementById('result').innerHTML = `<hr><h6>La suma de A + B </h6><hr>`;
    let size = Number(document.getElementById('sizeArray').value);


    for (let x = 0; x < size; x++) {
        arrayNumber1[x] = Math.floor(Math.random() * (100 - (-100))) + (-100);
        arrayNumber2[x] = Math.floor(Math.random() * (100 - (-100))) + (-100);
        document.getElementById('boxArray1').innerHTML += `<li class='list-group-item'>${arrayNumber1[x]}</li>`;
        document.getElementById('boxArray2').innerHTML += `<li class='list-group-item'>${arrayNumber2[x]}</li>`;

    }

    let arrayResultA = [0];

    for (let x = 0; x < size; x++) {
        arrayResultA[x] = arrayNumber1[x] + arrayNumber2[x];
        document.getElementById('boxArray3').innerHTML += `<li class='list-group-item'>${arrayResultA[x]}</li>`;
    }
}

function operationB() {

    document.getElementById('result').innerHTML = `<hr><h6>La resta de B - A </h6><hr>`;
    let size = Number(document.getElementById('sizeArray').value);

    for (let x = 0; x < size; x++) {
        arrayNumber1[x] = Math.floor(Math.random() * (100 - (-100))) + (-100);
        arrayNumber2[x] = Math.floor(Math.random() * (100 - (-100))) + (-100);
        document.getElementById('boxArray1').innerHTML += `<li class='list-group-item'>${arrayNumber1[x]}</li>`;
        document.getElementById('boxArray2').innerHTML += `<li class='list-group-item'>${arrayNumber2[x]}</li>`;

    }

    let arrayResultB = [0];

    for (let x = 0; x < size; x++) {
        arrayResultB[x] = arrayNumber2[x] - arrayNumber1[x];
        document.getElementById('boxArray3').innerHTML += `<li class='list-group-item'>${arrayResultB[x]}</li>`;
    }
}

function operationC() {

    document.getElementById('result').innerHTML = `<hr><h6>La resta de B * A </h6><hr>`;
    let size = Number(document.getElementById('sizeArray').value);

    for (let x = 0; x < size; x++) {
        arrayNumber1[x] = Math.floor(Math.random() * (100 - (-100))) + (-100);
        arrayNumber2[x] = Math.floor(Math.random() * (100 - (-100))) + (-100);
        document.getElementById('boxArray1').innerHTML += `<li class='list-group-item'>${arrayNumber1[x]}</li>`;
        document.getElementById('boxArray2').innerHTML += `<li class='list-group-item'>${arrayNumber2[x]}</li>`;

    }

    let arrayResultC = [0];

    for (let x = 0; x < size; x++) {
        arrayResultC[x] = arrayNumber2[x] * arrayNumber1[x];
        document.getElementById('boxArray3').innerHTML += `<li class='list-group-item'>${arrayResultC[x]}</li>`;
    }
}