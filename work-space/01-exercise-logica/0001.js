let misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "girasoles"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];

console.log(misPlantas[0].lista[ 1]);

console.log(misPlantas[1].lista[1]);





//COntar solo numeros pares
function contarNumerosPares(arreglo){
    let total = 0;

    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] % 2 === 0) {
            total++;
        }
    }

    return total;
}

console.log(contarNumerosPares([5,2,6,3,7,5,6,3]));




//Numero Aleatorio
let numeroAleatorio0Y19 = Math.floor(Math.random() * 20)

console.log(numeroAleatorio0Y19);






// Retornar minimo, Operador Ternario 
function retornarMinimo(x,y) {
    return x < y ? x : y;
}

console.log(retornarMinimo(4, 7));
console.log(retornarMinimo(8, 2));
console.log(retornarMinimo(5, 5));


//Operador ternario ejemplo 2
let a = 5;
let b = 9;

console.log(a > b ? a = 2 : b * 3); 
