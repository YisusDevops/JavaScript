// Cuales son los numeros pares
let i = 2;
// while (i < 2) {
//     if (i % 2 == 0) {
//         console.log('Número par', i);      //En While se evalúa primero la condición, si la condición se cumple, se ejecuta la condición.
//     }
//     i++; 
// }

// console.log('Fuera del While');

do {
    if (i % 2 == 0) {
        console.log('Número par', i);     //Do While ejecuta primero la porción de código,
    }
    i++;
} while (i < 2);                         //y luego va a realizar la  evaluación de la condición, y si la condición se cumple vuelve a ejecutar la porción de código.