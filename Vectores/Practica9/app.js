let takeNumber = document.getElementById('takeNumber');
let printString = "";
let arrayLetter = [];

eventListener();
fillArray();

function eventListener() {
    takeNumber.addEventListener('change', getCharacter);
}


function fillArray() {

    for (let i = 0; i <= 25; i++) {
        arrayLetter[i] = String.fromCharCode(i + 65);
    }
}





function getCharacter(event) {

    // console.log(event);
    let value = Number(takeNumber.value);

    if (value >= 0 && value < 26) {

        // printString += ` <li class='list-group-item'>${arrayLetter[value]}<li>`;

        printString += `<li class='list-group-item mt-2'>${arrayLetter[value]}</li>`;
        document.getElementById('boxLetter').innerHTML = printString;
    } else {
        Swal.fire({
            type: 'error',
            title: 'CARACTER INVALIDO',
            text: 'Se ha ingresado un digito incorrecto'
        })
    }

    takeNumber.value = "";
}