let pokemons = [
    { name: "Pikachu", type: "Electrico", hp: 100 },
    { name: "Charmander", type: "Fuego", hp: 80 },
    { name: "Bulbasaur", type: "Plata", hp: 1 },
    { name: "Squirtle", type: "Agua", hp: 28 },
    { name: "Steelix", type: "Hierro Roca", hp: 69 },
    { name: "Magmar", type: "Fuego", hp: 69 },
    { name: "Elactabuzz", type: "Electrico", hp: 1 }
];

let pokemonsArray = [];

//Every Todos Tienen que cumplir la condicion

let bandera;
bandera = pokemons.every((pokemon) => pokemon.hp > 0)
console.log(bandera);

//Some Con que alguno cumpla la condición

bandera = pokemons.some((pokemon) => pokemon.hp > 40)
console.log(`Some ${bandera}`);



/* ======================================
//MAP Crea un nuevo Array con alguna condición dada
pokemonsArray = pokemons.map((pokemon) => pokemon.name == "Steelix" ? pokemon.hp : "Aqui no hay un Steelix")
   ======================================= */


/* ======================================
// FILTER TRAE UN ARREGLO POR UNA CONDICIÓN
pokemonsArray = pokemons.filter((pokemon) => pokemon.hp >= 50)
   ======================================= */


/* ======================================
    /FIND Solo funciona para encotrar un dato del arreglo 
pokemonsArray = pokemons.find((pokemon) => pokemon.hp == 69) 
   ======================================= */


/* ======================================
pokemons.forEach(function(pokemon) {
    pokemonsArray.push(pokemon.name)
})
   ======================================= */

/* ======================================
let Persona = {
    nombre: "Miguel",
    apellido: "Avila",
    LlamarPersona: function() {
        setTimeout(() => {
            console.log(`${this.nombre} ${this.apellido} Presentarse en la sala de combate`);
        }, 3000);
    }
}
Persona.LlamarPersona();
   ======================================= */