//Exercise #5
// Programa una función que invierta las palabras de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function textoInvertido(texto) {
    return texto.split("").reverse().join('')
}


const parrafo = "Hola Mundo"

console.log(textoInvertido(parrafo));




//Exercise #6
// Programa una función para contar el número de veces que se repite una palabra,
// en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function textoRepetido(texto,palabra) {
    const partes = texto.split(palabra);

    return partes.length - 1;
}

function textoRepetidoV2(texto,palabra) {
    let contador = 0;
    let numPalabras = texto.split(' ')
    for (let i = 0; i < numPalabras.length; i++) {        
        if(numPalabras[i] === palabra)
            contador++
    }

    return contador;
}

const parrafo2 = "Hola Mundo Adios Mundo"
const palabra = "Mundo"


console.log(textoRepetido(parrafo2,palabra));
console.log(textoRepetidoV2(parrafo2,palabra));




//Exercise #7
// Programa una función que valide si una palabra o frase dada es un palíndromo, 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function palindromo(texto) {
    const arrayDeLetras = texto.split(' ');

    const arrayInvertido = arrayDeLetras.reverse();

    const reversed = arrayInvertido.join(' ');

    if (reversed === texto){
        return true;
    } else {
        return false;
    }
}

const miTexto = 'arroz';
console.log(palindromo(miTexto));






//Exercise #8
//  Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
