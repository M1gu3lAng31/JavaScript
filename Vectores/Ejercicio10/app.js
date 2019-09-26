let btnShowArray = document.getElementById('btnShowArray');
let counter = 0;

eventListener();

function eventListener() {
    btnShowArray.addEventListener('click', showArray);
}

function showArray() {

    let arrayNumbers = [],
        arrayImpar = [];
    let max = 30;

    for (let x = 0; x < 30; x++) {

        arrayNumbers[x] = Math.floor(Math.random() * (300 - 100 + 1) + 100);
        document.getElementById('boxNumber').innerHTML += `<li class='list-group-item'>${arrayNumbers[x]}</li>`;

        if (arrayNumbers[x] % 2 != 0) {
            arrayImpar[x] = arrayNumbers[x];
            document.getElementById('boxImparNumber').innerHTML += `<li class='list-group-item'>${arrayImpar[x]}</li>`;
        }
    }




}