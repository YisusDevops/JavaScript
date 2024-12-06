console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.documentElement.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://www.youtube.com/@jaybetter");


// Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
