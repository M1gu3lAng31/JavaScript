class LocalStorage {

    constructor() {}

    SaveCourseLocalStorage(curso) {
        let ArrayCourses = [];
        ArrayCourses = this.GetCoursesLocalStorage();
        ArrayCourses.push(curso);
        localStorage.setItem('courses', JSON.stringify(ArrayCourses));

    }

    GetCoursesLocalStorage() {
        let cursosLS;
        if (localStorage.getItem('courses') === null) {
            cursosLS = [];
        } else {
            cursosLS = JSON.parse(localStorage.getItem('courses'))
        }
        return cursosLS;
    }

    cursoRepetidoLS(datacourse) {
        let cursosLS, bandera = false;


        cursosLS = this.GetCoursesLocalStorage();

        cursosLS.forEach(function(cursoLS) {

            if (cursoLS.id === datacourse.id) {
                bandera = true;
                // break;
            }


        });
        return bandera;
    }



    eliminarCursoLS(cursoid) {
        let cursosLS;

        cursosLS = this.GetCoursesLocalStorage();

        cursosLS.forEach(function(cursoLS, index) {
            if (cursoLS.id === cursoid) {
                cursosLS.splice(index, 1)
            }
        });
        localStorage.setItem('courses', JSON.stringify(cursosLS));
    }

    vaciarCarritoLS() {
        localStorage.clear();
    }

}