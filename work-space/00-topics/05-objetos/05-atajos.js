let obj = {};
let obj2 = new Object();

/**
 * new Array();   [] va a crear un Array (arreglo)
 * new String();  "" '' `` va a crear un String
 * new Number();  12
 * new Boolan();  true false
 */

function Usuario() {
    this.name = "Yisus";
}
let user = new Usuario();
console.log(user.constructor);