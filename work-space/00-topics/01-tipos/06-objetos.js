// personaje de TV 
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",  
    anime: "Demon Slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje.anime);

// Tambien se puede acceder a las propiedades de este objeto agregando parentesis cuadrados [] y dentro del paretsesis agregar comillas simples o dobles
console.log(personaje["edad"]);

// Para modificar la propiedad de un objeto podemos utilizar esto: por ejemplo la propiedad edad.
let llave = "edad";
personaje[llave] = 13;
console.log(personaje.edad);
