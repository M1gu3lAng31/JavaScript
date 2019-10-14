class LocalStorage {

    constructor() {}

    agregarContactoLS(datosAgenda) {
        let arrayContactos = [];
        arrayContactos = this.obtenerLS();
        arrayContactos.push(datosAgenda);

        localStorage.setItem('contacto', JSON.stringify(arrayContactos));

    }


    obtenerLS() {
        let contacto;

        if (localStorage.getItem('contacto') === null) {
            contacto = [];
        } else {
            contacto = JSON.parse(localStorage.getItem('contacto'));
        }
        return contacto;
    }



}