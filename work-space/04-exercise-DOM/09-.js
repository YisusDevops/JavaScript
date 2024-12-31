//Deteccion de Dispositivos (User Agent)

const d = document,
n = navigator,
ua = n.userAgent; 
export default function userDeviceInfo(id) {

    const userAgent = navigator.userAgent;
    let dispositivo = "Desconocido";
    let sistemaOperativo = "Desconocido";
    let navegador = "Desconocido";

    // Detectar dispositivo
    if (/mobile/i.test(userAgent)) {
        dispositivo = "Móvil";
    } else if (/tablet/i.test(userAgent)) {
        dispositivo = "Tablet";
    } else {
        dispositivo = "Escritorio";
    }

// Detectar sistema operativo
    if (/windows/i.test(userAgent)) {
        sistemaOperativo = "Windows";
    } else if (/mac/i.test(userAgent)) {
        sistemaOperativo = "macOS";
    } else if (/android/i.test(userAgent)) {
        sistemaOperativo = "Android";
    } else if (/linux/i.test(userAgent)) {
        sistemaOperativo = "Linux";
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        sistemaOperativo = "iOS";
    }

// Detectar navegador
    if (/chrome|crios/i.test(userAgent)) {
        navegador = "Chrome";
    } else if (/firefox|fxios/i.test(userAgent)) {
        navegador = "Firefox";
    } else if (/safari/i.test(userAgent) && !/chrome|crios/i.test(userAgent)) {
        navegador = "Safari";
    } else if (/edge|edg/i.test(userAgent)) {
        navegador = "Edge";
    } else if (/opera|opr/i.test(userAgent)) {
        navegador = "Opera";
    } else if (/msie|trident/i.test(userAgent)) {
        navegador = "Internet Explorer";
    }

// Mostrar la información
    const informacionUsuario = `Dispositivo: ${dispositivo}\nSistema Operativo: ${sistemaOperativo}\nNavegador: ${navegador}`;
    console.log(informacionUsuario);
    document.body.innerHTML += `<p>${informacionUsuario.replace(/\n/g, '<br>')}</p>`;

}

