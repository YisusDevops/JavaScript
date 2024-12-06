const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius ="5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));


const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementChild);
console.log($cards.closest("div"));
console.log($cards.closest("body"));




//Variables CSS - Custom Properties
// const $html = document.documentElement,
// $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//     varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor,varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color",);



// DOM Texto y HTML 
// const $whatIsDOM = document.getElementById("que-es");

// let text = `
// <p>
// El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
// </p>
// <p>
// Este provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
// </p>
// <p>
// <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
// </p>
// `;

// // $whatIsDOM.innerText = text;   
// $whatIsDOM.textCoontent = text;
// $whatIsDOM.innerHTML = text;