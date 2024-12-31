//Responsive Tester
const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    const $btnProbar = $form.querySelector('[name="probar"]');
    const $btnCerrar = $form.querySelector('[name="cerrar"]');
    let testerWindow;

    $btnProbar.addEventListener("click", (e) => {
        e.preventDefault();

        const direccion = $form.direccion.value;
        const ancho = $form.ancho.value;
        const alto = $form.alto.value;

        if (direccion && ancho && alto) {
            testerWindow = window.open(
                direccion,
                "tester",
                `width=${ancho},height=${alto}`
            );
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    $btnCerrar.addEventListener("click", () => {
        if (testerWindow) {
            testerWindow.close();
            testerWindow = null;
        } else {
            alert("No hay ninguna ventana abierta.");
        }
    });
}
