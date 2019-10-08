class prizeClass {

    posicionX = 0;
    posicionY = 0;
    sizeMargin = 0;

    constructor() {
        this.calculateSizeMargin();
    }

    PositionX(posicionX) {
        this.posicionX = posicionX;
    }

    PositionY(posicionY) {
        this.posicionY = posicionY;
    }

    // get posicionX() {
    //     return this.posicionX;
    // }

    // get posicionY() {
    //     return this.posicionY;
    // }


    calculateSizeMargin() {

        let marginLeftContainer = window.getComputedStyle(document.getElementById('contenedor'));
        let marginLeft = marginLeftContainer.getPropertyValue('margin-left');
        this.sizeMargin = marginLeft.substring(0, marginLeft.length - 2);
    }

    createElementImg() {
        // console.log(this.sizeMargin);

        let imgCreate = document.createElement('img');
        imgCreate.setAttribute('src', './Imagenes/Prize.png');
        imgCreate.style.width = "100px";

        let posX = (this.posicionX - this.sizeMargin) - 25;
        let posY = this.posicionY - 25;

        imgCreate.style.left = `${posX}px`;
        imgCreate.style.top = `${posY}px`;

        // console.log(marginLeftContainer);

        document.getElementById('contenedor').appendChild(imgCreate);

        return { posX, posY }
    }

}