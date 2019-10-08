eventListener();
let arrayPositionPrize = [];

function eventListener() {
    document.addEventListener('keydown', moveCar); /**Cuando se presiona la tecla es cuando se ejecuta el evento */
    document.getElementById('contenedor').addEventListener('click', setPrize);
    // imageCar.addEventListener('keypress', moveCar);
}



let car = new CarClass(0, 0);

function moveCar(event) {
    // console.log(event);

    let image = document.getElementById('car');

    switch (event.key) {

        case 'ArrowRight':
            car.moveRight(image);
            break;

        case 'ArrowLeft':
            car.moveLeft(image);
            break;

        case 'ArrowUp':
            car.moveTop(image);
            break;

        case 'ArrowDown':
            car.moveBottom(image);
            break;
    }


    if (arrayPositionPrize.length > 0) {
        let resultado = car.currentPosititon(arrayPositionPrize, image);
        console.log(resultado);

    }
    // log('x ' + PositionX + 'y ' + PositionY);



}

function setPrize(event) {

    let prize = new prizeClass();

    // console.log(event);

    prize.PositionX(event.clientX);
    prize.PositionY(event.clientY);

    arrayPositionPrize.push(prize.createElementImg());

    console.log(arrayPositionPrize);

}