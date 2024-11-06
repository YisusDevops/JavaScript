


//Exercise #1
// Programa una función que cuente el número de caracteres de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá 10.
function contarCaracteres(texto) {
    return texto.length
}

console.log(contarCaracteres("Hola Mundo"));



//Exercise #2
// Programa una función que te devuelva el texto recortado según el número de -
// caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function textoRecortado(texto, pos) {
    return texto.slice(0,pos)
}

const parrafo = "Hola mundo"
console.log(textoRecortado(parrafo,4));
console.log(textoRecortado(parrafo,7));
console.log(textoRecortado(parrafo,10));



//Exercise #3
// Programa una función que dada una String te devuelva un Array de textos separados -
// por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function textoSeparado(texto) {
    return texto.split(' ');
}

const txt = 'hola que tal'
console.log(textoSeparado(txt));





//Exercise #4
// Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) -
// devolverá Hola Mundo Hola Mundo Hola Mundo.
function textoRepetido(texto, numVeces) {
    let resultado = "";
    
    for (let i = 0; i < numVeces; i++) {
        resultado += texto;
        if (i < numVeces -1) {
            resultado += " ";
        }
    }
    return resultado;
}
console.log(textoRepetido("Hola Mundo", 3));