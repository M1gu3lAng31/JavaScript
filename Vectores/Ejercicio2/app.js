let btnAddWord = document.getElementById('btnAddWord');
let words = [];
let wordsFirstVowel = [];
let counter = 0;

eventListener();

function eventListener() {
    btnAddWord.addEventListener('click', addWord);
}

function addWord() {
    let valueInput = String(document.getElementById('inputWord').value);
    let firtLetter = valueInput.slice(0, 1);
    // let x = 0;
    let i = 0;
    counter++;

    for (let x = 0; x < counter; x++) {
        if (firtLetter.toUpperCase() == 'A' || firtLetter.toUpperCase() == 'E' || firtLetter.toUpperCase() == 'I' || firtLetter.toUpperCase() == 'O' || firtLetter.toUpperCase() == 'U') {
            wordsFirstVowel[x] = valueInput;
            document.getElementById('boxWordVowel').innerHTML += `<li class='list-group-item'>${wordsFirstVowel[x]}</li>`;
            console.log(wordsFirstVowel[x]);

            return;
        }
    }

    words[i] = valueInput;

    for (i = 0; i < words.length; i++) {
        document.getElementById('boxWord').innerHTML += `<li class='list-group-item'>${words[i]}</li>`;
        console.log(words[i]);

    }




}