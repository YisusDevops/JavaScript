
console.log(window);
console.log(document);

let texto = "Hola estas escuchando jaybetterbeats";
const hablar = (texto) => 
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto)); 
hablar(texto);

//el navegador debe hablar y decir "Hola estas escuchando jaybetterbeats"