//Exercise #12
// Programa una función que determine si un número es primo 
//(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
function fnPrimo(numero) {

    for (let i = 2; i < numero; i++){
        if (numero % i === 0) {
            return false;
        } 
    }
        return true;
}

console.log(fnPrimo(7));
console.log(fnPrimo(4));
console.log(fnPrimo(11));
console.log(fnPrimo(10));







//Exercise #12
//Programa una función que determine si un número es par o impar, 
//pe. miFuncion(29) devolverá Impar.
function numParImpar(numero) {

    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}


console.log(numParImpar(29));








//Exercise #13
// Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
//pe. miFuncion(0,"C") devolverá 32°F.
function gradosCelsFahr(temperatura, tipo) {
    if (tipo === "c") {
        let fahrenheit = (temperatura * 1.8) + 32;
        return fahrenheit + "°F";
    } else if (tipo === "f") {
        let celsius = (temperatura - 32) / 1.8;
        return celsius + "°C"
    }
}


console.log(gradosCelsFahr(0, "c"));
console.log(gradosCelsFahr(32, "f"));






