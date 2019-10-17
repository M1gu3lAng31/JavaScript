const cuerpoHumano = document.getElementById('cuerpo-humano');
const ingles = document.getElementById('nombreIngles');
const español = document.getElementById('nombreEspañol');

eventListener();

function eventListener() {
    // cuerpoHumano.addEventListener('click', coordenada);
    cuerpoHumano.addEventListener('mousemove', coordenada);

}

function coordenada(event) {
    console.log(event);

    if (event.screenX >= 357 && event.screenX <= 404 &&
        event.screenY >= 142 && event.screenY <= 158) {
        ingles.innerHTML = `<h4>Head</h4>`;
        español.innerHTML = `<h4>Cabeza</h4>`;

    } else if (event.screenX >= 370 && event.screenX <= 390 &&
        event.screenY >= 171 && event.screenY <= 175) {
        ingles.innerHTML = `<h4>Eyes</h4>`;
        español.innerHTML = `<h4>Ojos</h4>`;

    } else if (event.screenX >= 378 && event.screenX <= 386 &&
        event.screenY >= 176 && event.screenY <= 185) {
        ingles.innerHTML = `<h4>Nose</h4>`;
        español.innerHTML = `<h4>Nariz</h4>`;

    } else if (event.screenX >= 375 && event.screenX <= 391 &&
        event.screenY >= 190 && event.screenY <= 195) {
        ingles.innerHTML = `<h4>Mouth</h4>`;
        español.innerHTML = `<h4>Boca</h4>`;


    } else if (event.screenX >= 313 && event.screenX <= 346 &&
        event.screenY >= 225 && event.screenY <= 240) {
        ingles.innerHTML = `<h4>Shoulder</h4>`;
        español.innerHTML = `<h4>Hombro</h4>`;

    } else if (event.screenX >= 417 && event.screenX <= 446 &&
        event.screenY >= 225 && event.screenY <= 240) {
        ingles.innerHTML = `<h4>Shoulder</h4>`;
        español.innerHTML = `<h4>Hombro</h4>`;

    } else if (event.screenX >= 326 && event.screenX <= 338 &&
        event.screenY >= 241 && event.screenY <= 271) {
        ingles.innerHTML = `<h4>Arm</h4>`;
        español.innerHTML = `<h4>Brazo</h4>`;


    } else if (event.screenX >= 301 && event.screenX <= 329 &&
        event.screenY >= 275 && event.screenY <= 394) {
        ingles.innerHTML = `<h4>Arm</h4>`;
        español.innerHTML = `<h4>Brazo</h4>`;

    } else if (event.screenX >= 430 && event.screenX <= 476 &&
        event.screenY >= 274 && event.screenY <= 395) {
        ingles.innerHTML = `<h4>Arm</h4>`;
        español.innerHTML = `<h4>Brazo</h4>`;

    } else if (event.screenX >= 264 && event.screenX <= 303 &&
        event.screenY >= 399 && event.screenY <= 446) {
        ingles.innerHTML = `<h4>Hand</h4>`;
        español.innerHTML = `<h4>Mano</h4>`;

    } else if (event.screenX >= 463 && event.screenX <= 504 &&
        event.screenY >= 404 && event.screenY <= 447) {
        ingles.innerHTML = `<h4>Hand</h4>`;
        español.innerHTML = `<h4>Mano</h4>`;

    } else if (event.screenX >= 335 && event.screenX <= 432 &&
        event.screenY >= 415 && event.screenY <= 609) {
        ingles.innerHTML = `<h4>Legs</h4>`;
        español.innerHTML = `<h4>Piernas</h4>`;

    } else if (event.screenX >= 352 && event.screenX <= 419 &&
        event.screenY >= 609 && event.screenY <= 636) {
        ingles.innerHTML = `<h4>Feet</h4>`;
        español.innerHTML = `<h4>Pies</h4>`;

    } else if (event.screenX >= 344 && event.screenX <= 421 &&
        event.screenY >= 247 && event.screenY <= 286) {
        ingles.innerHTML = `<h4>Chest</h4>`;
        español.innerHTML = `<h4>Pecho</h4>`;

    } else if (event.screenX >= 346 && event.screenX <= 421 &&
        event.screenY >= 287 && event.screenY <= 365) {
        ingles.innerHTML = `<h4>Trunk</h4>`;
        español.innerHTML = `<h4>Tronco</h4>`;

    } else {
        ingles.innerHTML = ``;
        español.innerHTML = ``;
    }

}