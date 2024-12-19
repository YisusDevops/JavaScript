/**
 * crear algoritmo que devuelva un array de objetos en base a pares
 */
let pairs  = [
    [1, { name: "Samantha"}],
    [2, { name: "Aldo"}],
    [3, { name: "Carolina"}],
];

let array = [{
    id: 1,
    name: 'Samantha',
}, {
    id: 2,
    name: 'Aldo',
}, {
    id: 3,
    name: 'Carolina'
}  ];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);