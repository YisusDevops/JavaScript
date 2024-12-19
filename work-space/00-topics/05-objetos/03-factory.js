// let user = {
//     id: 1,
//     email: 'yisus@treelabx.com',
//     name: 'Yisus',
//     activo: true,
//     recuperarClave: function () {
//         console.log('recuperando clave...');
//     },
// };


// let user2 = {
//     id: 2,
//     email: 'tokyo@treelabx.com',
//     name: 'Tokyo',
//     activo: false ,
//     recuperarClave: function () {
//         console.log('recuperando clave...');
//     },
// };


/**
 * Para no tener un código tan repetitivo en una App, utilizamos las Factory Functions
 */

function crearUsuario(name, email) {
    return {
        id: 1,
        email,
        name,
        activo: true,
        recuperarClave: function () {
        console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Yisus', 'yisus@treelabx.com');
let user2   = crearUsuario('Alicia', 'alicia@treelabx.com');

console.log(user1,user2);