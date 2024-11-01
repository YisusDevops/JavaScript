class Calculator {
    sumar (n1, n2){
        return n1 + n2;
    }

    restar (n1, n2){
        return n1 - n2;
    }

    multiplicar (n1, n2){
        return n1 * n2;
    }

    dividir (n1, n2){
        return n1 / n2;
    }
}
// instancia de la clase 
const calc1 = new Calculator ();

console.log(calc1.sumar(1200,4000));
// 5200
console.log(calc1.sumar(700,2));
// 702
console.log(calc1.restar(8000,600));
// 7400
console.log(calc1.restar(1700,350));
// 1350
console.log(calc1.multiplicar(8,8));
// 64
console.log(calc1.multiplicar(20,15));
// 300
console.log(calc1.dividir(900,5));
// 180
console.log(calc1.dividir(45,7));
// 6.4