let btnCalculate = document.getElementById('btnCreateAll');

eventListener();

function eventListener() {
    btnCalculate.addEventListener('click', fillArray);
}

function fillArray() {
    let arrayNumber = [0];
    let size = Number(document.getElementById('inputSizeArray').value);

    for (let x = 0; x < size; x++) {
        arrayNumber[x] = Math.floor(Math.random() * 100) + 1;
        document.getElementById('boxNumber').innerHTML += `<li class='list-group-item'>${arrayNumber[x]}</li>`;

        if (arrayNumber[x] % 2 == 0) {
            document.getElementById('boxEvenNumber').innerHTML += `<li class='list-group-item'>${arrayNumber[x]}</li>`;
        }


    }

}