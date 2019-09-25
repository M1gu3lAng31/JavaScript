let btnCalculate = document.getElementById('btnCalculate');
let counter = 0;
let y = 0;
let j = 0;
eventListener();

function eventListener() {
    btnCalculate.addEventListener('click', arrayPrimeNumber)
}

function arrayPrimeNumber() {
    let arrayPriNumber = [];

    for (let i = 2; i <= 1000; i++) {
        for (let x = 2; x <= i; x++) {
            if (i % x == 0) {
                counter++;
            }
        }
        if (counter == 1) {
            // console.log(i);
            arrayPriNumber[y] = i;
            y++;

        }
        counter = 0;

    }

    // arrayPriNumber.length = j;
    for (j = arrayPriNumber.length - 1; j >= 0; j--) {
        console.log(arrayPriNumber[j]);

        document.getElementById('boxOrganizedNumbers').innerHTML += `<li class='list-group-item'>${arrayPriNumber[j]}</li>`;
    }

}