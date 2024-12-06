// Vamos a crear un Template HTML con los elementos de las imagenes.
//Es decir agregamos nuevamente las imagenes en un template 


const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Espacio",
            img: "https://acortar.link/5vz9of",
        },
        {
            title: "Animales",
            img: "https://acortar.link/2mm6Ft",
        },
        {
            title: "Fantasia",
            img: "https://acortar.link/O5ubZG",
        },
        {
            title: "Musica",
            img: "https://acortar.link/HJlSwl",
        },
        {
            title: "Naturaleza",
            img: "https://acortar.link/6pUWI5",
        },
    ];

    cardContent.forEach(el => {
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").textContent = el.title;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $cards.appendChild($fragment);
