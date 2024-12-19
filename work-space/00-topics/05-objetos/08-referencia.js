/**
 * Los tipos de datos Primitivos se copian cuando los asignamos a otras variales.
 * Los tipos de datos de Referencia se crea una referencia.   
 * Y estos son los:
 * - Objetos
 * - Arrays
 * - Funciones 
 */

let a = { prop: 1 };

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);