let btnShowArray = document.getElementById('btnShowArray');

eventListener();

function eventListener() {
    btnShowArray.addEventListener('click', showArray);
}

function showArray() {
    let arrayNormal = [],
        arrayInvert = [],
        max = 10;

    for (let x = 0; x < max; x++) {
        arrayNormal[x] = x;
        document.getElementById('boxArray').innerHTML += `<li class='list-group-item'>${arrayNormal[x]}</li>`;
    }

    for (let i = arrayNormal.length - 1; i >= 0; i--) {
        arrayInvert[i] = i;
        document.getElementById('boxInvertArray').innerHTML += `<li class='list-group-item'>${arrayInvert[i]}</li>`;
    }
}