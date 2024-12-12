
// Evento Rsize: Detecta cuando la ventana del navegador cambia de tamaño.
window.addEventListener("resize", (e) => {
console.clear();
console.log("********** Evento Resizing **********");
console.log(window.innerWidth);  // Ancho visible de la ventana
console.log(window.innerHeight); // Alto visible de la ventana
console.log(window.outerrWidth);
console.log(window.outerHeight);
console.log(window.scrollX); // Posición horizontal del scroll
console.log(window.scrollY); // Posición vertical del scroll
console.log(e); // Objeto del evento
});



// Evento Scroll: Detecta cuando se realiza un desplazamiento (scroll) en la página.
window.addEventListener("scroll", (e) => {
console.clear();
console.log("********** Evento Scroll **********");
console.log(window.scrollX); // Posición horizontal del scroll
console.log(window.scrollY); // Posición vertical del scroll
console.log(e); // Objeto del evento
});



// Evento Load: Detecta cuando la página web ha terminado de cargarse.
window.addEventListener("load", (e) => {
console.log("********** Evento Load **********");
console.log(window.screenX); // Posición horizontal inicial de la ventana
console.log(window.screenY); // Posición vertical inicial de la ventana
console.log(e); // Objeto del evento
});

document.addEventListener("DOMContentLoaded", (e) => {
console.log("********** Evento DOMContentLoaded **********");
console.log(window.screenX); // Posición horizontal inicial de la ventana
console.log(window.screenY); // Posición vertical inicial de la ventana
console.log(e)
});