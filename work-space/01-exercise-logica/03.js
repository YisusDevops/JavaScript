//Exercise #9
// Programa una función que obtenga un numero aleatorio entre 501 y 600.
function numAleatorio(numero) {
    return Math.floor(Math.random() * (600 - 501) + 501);
}

console.log(numAleatorio(600));



//Exercise #10
// Programa una función que reciba un número y evalúe si es capicúa o no 
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
function numCapicúa(miNumero) {
    const numeroStr = miNumero.toString();

    const arrayDeLetras = numeroStr.split('');
    console.log(arrayDeLetras)
    const arrayInvertido = arrayDeLetras.reverse();
    console.log(arrayInvertido)
    const reversed = arrayInvertido.join('');
    console.log(reversed)
    if (reversed === numeroStr){
        return true;
    } else {
        return false
    }
}

const miNumero = 2002
console.log(numCapicúa(miNumero));






//Exercise #11
// Programa una función que calcule el factorial de un número 
//(El factorial de un entero positivo n, se define como el producto de todos 
//los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
function miFactorial(n) {
    let resultado = 1 
    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    return resultado
}

console.log(miFactorial(5));
