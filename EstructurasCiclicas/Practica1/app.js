sumaCantidades();

function sumaCantidades() {

    let y = 0;


    /**Estructura cíclica  la cual se compone de una (variable inicializada, condición lógica e incrementador), 
     * la cual nos ayuda a la ejecución repetitiva de un bloque de codigo
     */
    for (let x = 1; x <= 10; x++) {

        y = y + x;
        /**Se crea el elememto "li" por medio del metodo "createElment" 
         * y se asigna la variable "newli"
         */
        let newli = document.createElement('li');

        /**Se asigna el atributo "id" y "class" a la variable "li" */
        newli.setAttribute("id", `listaNli${x}`);
        newli.setAttribute("class", "list-group-item");

        /**Se crea el nodo de texto por medio de "createTextNode" */
        let newContent = document.createTextNode(y);

        /**Se inserta un hijo por medio del metodo "appendChild" a la variable "newli" */
        newli.appendChild(newContent);

        let listaDesordenada = document.getElementById('listaNumerica');
        listaDesordenada.appendChild(newli);
    }
}