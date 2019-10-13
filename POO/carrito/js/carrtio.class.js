class Carrito {

    constructor() {
        this.LS = new LocalStorage();
    }


    ShowCoursesLSCar() {

        let CoursesLS = this.LS.GetCoursesLocalStorage();

        CoursesLS.forEach(function(curso) {
            const row = document.createElement('tr');
            row.innerHTML = `       
            <td> 
                <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
            `

            listaCursos.appendChild(row);
        });
    }

    readDataCourse(curso, listaCursos) {

        /*declaracion de objetos*/

        const dataCourse = {
                imagen: curso.querySelector('img').src,
                titulo: curso.querySelector('h4').textContent,
                precio: curso.querySelector('.precio span').textContent,
                id: curso.querySelector('a').getAttribute("data-id")
            }
            // console.log(dataCourse);

        this.addCourseCar(dataCourse, listaCursos);

    }

    addCourseCar(dataCourse, listaCursos) {

        let cursoRepetido = this.LS.cursoRepetidoLS(dataCourse);


        if (cursoRepetido == false) {
            const row = document.createElement('tr');
            row.innerHTML = `       
        <td> 
            <img src="${dataCourse.imagen}" width=100>
        </td>
        <td>${dataCourse.titulo}</td>
        <td>${dataCourse.precio}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${dataCourse.id}">X</a>
        </td>
        `
            listaCursos.appendChild(row);
            Swal.fire({
                type: 'success',
                title: 'Agregado Con Exito',
                text: 'Aprende Mucho'
            })
            this.LS.SaveCourseLocalStorage(dataCourse);
            console.log('Curso Agregado');

        } else {
            console.log('Curso Repetido');
            Swal.fire({
                type: 'warning',
                title: 'Curso Ya Existe'
            })


        }

    }


    eliminarCursoCarrito(event) {
        event.preventDefault();

        let curso, cursoId;

        if (event.target.classList.contains('borrar-curso')) {
            curso = event.target.parentElement.parentElement;
            cursoId = curso.querySelector('a').getAttribute('data-id')
            curso.remove();
            this.LS.eliminarCursoLS(cursoId);
        }
    }

    vaciarCarrito(listaCursos) {
        /* ======================================
            Forma lenta
           ======================================= */
        // listaCursos.innerHTML = '';


        /* ======================================
            Forma Rapida
           ======================================= */
        while (listaCursos.firstChild) {
            listaCursos.removeChild(listaCursos.firstChild);
        }
        this.LS.vaciarCarritoLS();
        Swal.fire({
            type: 'warning',
            position: 'top',
            title: 'Carro Vaciado',
        })
    }

}