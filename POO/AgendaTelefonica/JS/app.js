const listaContactos = document.querySelector('#lista-contactos tbody');
// const listaContactosTelefono = document.getElementById('lista-contactos-telefono');
// const listaContactosFecha = document.getElementById('lista-contactos-fecha');

let agendaClass = new Agenda();
let LSClass = new LocalStorage();

eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', mostrarContactos);
    document.querySelector('#formulario').addEventListener('submit', agregarContacto);
}

function agregarContacto() {
    let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    let registro;
    let nombreContacto = document.getElementById('inputNombre');
    let telefonoContacto = document.getElementById('inputTelefono');

    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();

    registro = `${dia} / ${mes} / ${año}`;

    agendaClass.agregarContacto(nombreContacto, telefonoContacto, registro);
}

function mostrarContactos() {
    agendaClass.mostrarAgendaLS();
}