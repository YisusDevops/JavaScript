function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('dibujando ...'); }
}

let punto = { z: 7 };
Punto.call(punto, 1, 2);
// Punto.apply(punto, [1, 2]);             //apply hace exactamente lo mismo
console.log(punto);