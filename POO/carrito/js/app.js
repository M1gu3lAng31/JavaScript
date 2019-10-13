const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');

const objectCard = new Carrito();


eventListener();

function eventListener() {
    cursos.addEventListener('click', GetCourse);
    carrito.addEventListener('click', eliminarCourse);
    vaciarCarrito.addEventListener('click', vaciarCarritoCursos);
    document.addEventListener('DOMContentLoaded', mostrarCursosCarrito);
}

function eliminarCourse(event) {
    objectCard.eliminarCursoCarrito(event);
    Swal.fire({
        type: 'error',
        position: 'top-end',
        title: 'Curso eliminado',
    })
}

function mostrarCursosCarrito() {
    objectCard.ShowCoursesLSCar(listaCursos);
}

function GetCourse(event) {

    event.preventDefault();
    if (event.target.classList.contains('agregar-carrito')) {
        let Course = event.target.parentElement.parentElement;
        // console.log(Course);
        objectCard.readDataCourse(Course, listaCursos);

    }
}

function vaciarCarritoCursos() {
    objectCard.vaciarCarrito(listaCursos);


}