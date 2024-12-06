//Vamos a modificar elementos (Old Style), es decir eliminar o cambiar elementos (imagenes)

const $cards = document.querySelectorAll(".cards"),
    $newCard = document.createElement("figure");

$newCard.innerHTML = `
    <img src="https://acortar.link/5vz9of" alt="Card">
    <figcaption>Space</figcaption>
`;


// $cards.insertBefore($newCard, $cards.firstElementChild);
$cards.removeChild($cards.lastElementChi  ld);






//Vamos a modificar elementos (Cool Style)

//.insertAdjacent...
// .insertAdjacentElement(position, el)
// .insertAdjacentHTML(position, html)
// .insertAdjacentText(position, text)

//Posiciones
// beforebegin(hermano anterior)
// afterbegin(primer hijo)
// beforeend(ultimo hijo)
// afterend(hermano siguiente)

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contenCard =
    //Reservamos esta parte porque no tengo estos datos ????????
;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin", $newCard);