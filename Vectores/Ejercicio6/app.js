let btnAddWord = document.getElementById('btnAddWord');
let btnShowArrays = document.getElementById('btnShowArrays');
let arrayWord = [];
let counter = 0;

eventListener();

function eventListener() {
    btnAddWord.addEventListener('click', addWord);
    btnShowArrays.addEventListener('click', showArrays);
}

function addWord() {
    let valueInput = String(document.getElementById('inputWord').value);
    counter++;

    for (let x = 0; x < counter; x++) {
        console.log(counter)
        arrayWord[counter - 1] = valueInput;
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Palabra Agregada',
            showConfirmButton: false,
            timer: 1500
        })
        return;
    }
    valueInput.value = "";
    valueInput = focus();
}

function showArrays() {
    console.log(arrayWord.length);

    for (let x = 0; x < arrayWord.length; x++) {
        console.log(arrayWord[x]);
        document.getElementById('boxWord').innerHTML += `<li class='list-group-item'>${arrayWord[x]}</li>`;
    }
    for (let j = arrayWord.length - 1; j >= 0; j--) {
        console.log(arrayWord[j]);
        document.getElementById('boxWordInvested').innerHTML += `<li class='list-group-item'>${arrayWord[j]}</li>`;
    }

}