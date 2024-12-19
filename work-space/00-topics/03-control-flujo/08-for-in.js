let user = {
    id: 1,
    name: "Alicia",
    age: 25,
};
for (let prop in user) {
    console.log(prop, user [prop]);
}

let animales = ['Pato', 'Oso', 'Perro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}