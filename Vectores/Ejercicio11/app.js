let btnSearch = document.getElementById('btnSearch');

eventListener();

function eventListener() {
    btnSearch.addEventListener('click', searchNumber);
}

function searchNumber() {
    let arrayNumber = [];
    let max = 25,
        aux = 0;;

    for (let x = 0; x < max; x++) {
        arrayNumber[x] = Math.floor(Math.random() * 10) + 1;
        console.log(x + ' -- ' + arrayNumber[x]);
    }

    for (let i = 0; i < max; i++) {
        for (let x = 0; x < max; x++) {
            if (arrayNumber[x] > arrayNumber[x + 1]) {
                aux = arrayNumber[x];
                arrayNumber[x] = arrayNumber[x + 1];
                arrayNumber[x + 1] = aux;
            }
        }

    }

    let lookNumber = Number(document.getElementById('inputLookNumber').value);
    let lower = 0,
        higher = max,
        half = 0;
    let flag = false;

    console.log(arrayNumber[24]);

    if (lookNumber <= arrayNumber[24]) {
        // console.log('hola');

        while (lower <= higher) {
            half = Math.floor(((lower + higher) / 2));
            if (arrayNumber[half] == lookNumber) {
                flag = true;
                break;
            }

            if (arrayNumber[half] > lookNumber) {
                higher = half;
                half = ((lower + higher) / 2);
            }

            if (arrayNumber[half] < lookNumber) {
                lower = half;
                half = ((lower + higher) / 2);
            }
            if (half == 0) {
                break;
            }
        }
    } else { flag = false; }


    if (flag == true) {
        document.getElementById('boxResult').innerHTML = `<h6>El numero ${lookNumber} esta en la posición ${half}</h6>`;
    } else {
        document.getElementById('boxResult').innerHTML = `<h6>El numero ${lookNumber} no esta en el vector</h6>`;
    }

    for (let x = 0; x < max; x++) {
        document.getElementById('boxNumber').innerHTML += `<li class='list-group-item'>${arrayNumber[x]}</li>`;
    }
}