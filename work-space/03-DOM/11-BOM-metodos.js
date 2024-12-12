

const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");


$btnAbrir.addEventListener("click", (e) => {
    window.open("https://treelabx.com.mx/")
}); 

$btnCerrar.addEventListener("click", (e) => {
    window.close();
});
$btnImprimir.addEventListener("click", (e) => {
    window.print();
});