class Proyectil {

    /* ======================================
        Propiedades de Objetos
       ======================================= */
    velicidadInicial = 0;
    angulo = 0;


    constructor(velicidadInicial, angulo) {
        this.velicidadInicial = velicidadInicial;
        this.angulo = angulo;
    }

    /* ======================================
        Metodo de objetos
       ======================================= */
    calcularVelocidadX(tiempo) {

        let velocidadX = 0;
        velocidadX = (this.velicidadInicial * Math.cos(this.angulo * (Math.PI / 180))) * tiempo;

        return velocidadX;
    }


    calcularVelocidadY(tiempo) {
        let velocidadY = 0;
        velocidadY = (this.velicidadInicial * Math.sin(this.angulo * (Math.PI / 180)));

        velocidadY = velocidadY * tiempo - 0.5 * 9.8 * Math.pow(tiempo, 2);

        return velocidadY;
    }

    crearSpan(posicionX, posicionY) {
        let spanCreado = document.createElement('span');
        spanCreado.style.left = `${posicionX}%`;
        spanCreado.style.bottom = `${posicionY}%`;
        document.getElementById('contenedor').appendChild(spanCreado);
    }

}