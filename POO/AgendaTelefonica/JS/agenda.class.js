class Agenda {

    // contenidoNombre = '';
    // contenidoTelefono = '';
    // contenidoRegistro = '';

    constructor() {
        this.LS = new LocalStorage();
    }

    agregarContacto(nombre, telefono, registro) {
        // this.contenidoNombre = nombre;
        // this.contenidoTelefono = telefono;
        // this.contenidoRegistro = registro;


        // this.crearContacto(this.contenidoNombre, this.contenidoTelefono, this.contenidoRegistro);
        // this.LS.agregarContactoLS(this.contenidoNombre, this.contenidoTelefono, this.contenidoRegistro);

        const datosAgenda = {
            contactoNombre: nombre.value,
            contactoTelefono: telefono.value,
            contactoRegistro: registro
        }

        console.log(datosAgenda);

        this.crearContacto(datosAgenda);
        this.LS.agregarContactoLS(datosAgenda);


    }

    crearContacto(datosAgenda) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${datosAgenda.contactoNombre}</td>
        <td>${datosAgenda.contactoTelefono}</td>
        <td>${datosAgenda.contactoRegistro}</td>`

        listaContactos.appendChild(row);
    }

    mostrarAgendaLS() {
        let contactos = this.LS.obtenerLS();

        contactos.forEach(function(contacto) {

            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${contacto.contactoNombre}</td>
        <td>${contacto.contactoTelefono}</td>
        <td>${contacto.contactoRegistro}</td>`

            listaContactos.appendChild(row);

        });

    }

}