//Vamos a crear un elemento del DOM en este caso una figure que necesita una etiqueta
// img y una etiqueta figcaption 




const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");


//Asi es como se van creando los nodos internamente 
$img.setAttribute("src","https://acortar.link/2mm6Ft");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");


//Elementos: agregamos nodo ($figure) nodo ($img) nodo ($figcaption) nodo ($figcaptionText)
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure); 


//Vamos a crear una lista de estaciones del anio
const estaciones =["Primavera", "Verano", "Otonio", "Invierno"],
$ul = document.createElement("ul");

document.write("<h2>Estaciones del Anio</h2>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});


//Vamos a crear una lista de los continentes del mundo
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));


//Vamos a crear los mese del anio
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();



meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h4>Meses del anio</h4>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);