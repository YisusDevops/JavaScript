function saludar() {
    console.log("Hello World");
}
saludar();


// return es sumamente importante porque nos va permitir reutilizar codigo que se encuentre dentro de estas funciones, estas van a poder calcular algo y despues nos podran devolver el valor que calcularon para reutilizarlo en el futuro
function suma() {
    return 2 + 2;
}

let resultado = suma();
console.log(resultado);

// otra manera de obtener el resultado
console.log(suma());