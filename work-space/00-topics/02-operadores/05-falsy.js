// short-circuit

// Valores que arrojan Falso, y a todos estos valores se les conocecomo "falsy"

// false
// 0
//  ''
// null
// undefined
// NaN

let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);

function fn1 () {
    console.log('soy funcion 1');
    return true;
} 

function fn2 () {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();