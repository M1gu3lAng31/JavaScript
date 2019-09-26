let btnEncrypt = document.getElementById('btnEncrypt');
let count = 0;

eventListener();

function eventListener() {
    btnEncrypt.addEventListener('click', encryptWord);
}

function encryptWord() {

    let arrayEncrypt = [''];
    let encrypt = 0;
    let valueInput = String(document.getElementById('btnMessage').value);

    console.log(valueInput.length);


    for (let x = 0; x < valueInput.length; x++) {
        // encrypt += valueInput[x].charCodeAt() = String.fromCharCode(x + 65 + (3));
        // console.log(valueInput[x].);
        encrypt = valueInput[x].charCodeAt();
        // console.log(encrypt);
        encrypt = String.fromCharCode(encrypt + 3);
        console.log(encrypt);
        arrayEncrypt[count] += encrypt;
    }

    console.log(arrayEncrypt[0]);

    document.getElementById('boxMessage').innerHTML = `<li class='list-group-item'>${valueInput}</li>`
    document.getElementById('boxMessageEncrypt').innerHTML = `<li class='list-group-item'>${arrayEncrypt[count]}</li>`
    console.log(valueInput);

}