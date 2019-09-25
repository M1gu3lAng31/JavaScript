let btnCalculate = document.getElementById('btnCalculate');

eventListener();

function eventListener() {
    btnCalculate.addEventListener('click', multiplication);
}

function multiplication() {


    let arrayNumbers = [],
        arrayNumbersMultipled = [];

    for (let x = 0; x < 10; x++) {
        arrayNumbers[x] = Math.floor(Math.random() * (100 - 50)) + 50;
        arrayNumbersMultipled[x] = arrayNumbers[x] * .5;

        document.getElementById('boxNumber').innerHTML += `<li class='list-group-item'>${arrayNumbers[x]}</li>`;
        document.getElementById('boxNumberMultiplied').innerHTML += `<li class='list-group-item'>${arrayNumbersMultipled[x]}</li>`;
    }





}