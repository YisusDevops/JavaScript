// cuales son los numeros pares 

// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// console.log('Fuera del While');

// Este While Loop se va estar ejecutando hasta que  i valga 10, cuando llegue a 10 se detendrá este Loop
// recordar que  i++ vale 1 solamente cada que se ejecuta 


// ejemplo 2 cuales son los numeros pares
let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
    i++; 
}

console.log('Fuera del While');