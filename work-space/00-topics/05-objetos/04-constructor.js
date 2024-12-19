// { id: 1, recuperarClave: function (){} }
function Usuario () {      //este siempre debe de llevar UpperCamelCase
    this.id = 1;
    this.recuperarClave = function () {      //Cuando tenemos una propiedad en JS y a esta le estamos asignando una function, ya sea function constructora o factory function, dejamos de llamarlas funciones ahora son (métodos)
        console.log('recuperando clave...');
    }
}

let usuario = new Usuario();

console.log(usuario);