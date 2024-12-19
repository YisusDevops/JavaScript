function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Yisus');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Yisus');
console.log(user1);

function returned() {
    return function () {
        console.log('Hello world');
    }
}

let saludo = returned();
saludo();