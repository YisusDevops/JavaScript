/**
 * crear algoritmo que tome un array de objetos y devuelva un array de pares
 */
let array = [{
    id: 1,
    name: 'Samantha',
}, {
    id: 2,
    name: 'Aldo',
}, {
    id: 3,
    name: 'Carolina'
}
];

let pares = [
    [1, { id: 1, name: "Samantha"}],
    [2, { id: 2, name: "Aldo"}],
    [3, { id: 3, name: "Carolina"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs [idx] = [elemento.id, elemento];
    }

    return pairs;
}

let resultado = toPairs(array);
console.log(resultado); 