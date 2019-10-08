class CarClass {

    posicionX = 0;
    posicionY = 0;


    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }


    moveRight(img) {

        if (this.posicionX <= 88) {
            img.src = "./Imagenes/SmallCarRight.png";
            img.style.width = "114px";
            img.style.height = "56px";
            // img.style.left = `${this.posicionX++}%`;
            img.style.left = `${this.posicionX++}%`;
            // console.log(img);}
        }

    }

    moveLeft(img) {
        // console.log(img);
        if (this.posicionX >= 0) {
            img.src = "./Imagenes/SmallCarLeft.png";
            img.style.width = "114px";
            img.style.height = "56px";
            img.style.left = `${this.posicionX--}%`;
        }
    }

    moveTop(img) {
        // console.log(img);

        if (this.posicionY >= 0) {
            img.src = "./Imagenes/SmallCarUp.png";
            img.style.height = "114px";
            img.style.width = "56px";
            img.style.top = `${this.posicionY--}%`;
        }
    }

    moveBottom(img) {
        // console.log(img);
        if (this.posicionY <= 82) {
            img.src = "./Imagenes/SmallCarDown.png";
            img.style.height = "114px";
            img.style.width = "56px";
            img.style.top = `${this.posicionY++}%`;
        }
    }

    currentPosititon(arrayPositionPrize, image) {

        let positionCarX = image.x;
        let positionCarY = image.y;

        for (let i = 0; i < arrayPositionPrize.length; i++) {
            let positionXPrize = arrayPositionPrize[i].posX;
            let positionYPrize = arrayPositionPrize[i].posY;

            console.log(`cordenadas carro `, positionCarX, positionCarY);
            console.log(`cordenadas prize `, positionXPrize, positionYPrize);


            if (positionCarX >= positionXPrize - 10 && positionCarX <= positionXPrize + 10 &&
                positionCarY >= positionYPrize - 10 && positionCarY <= positionYPrize + 10) {
                return true;
            }
        }
        return false;

    }

}