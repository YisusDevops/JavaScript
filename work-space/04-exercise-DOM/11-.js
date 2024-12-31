//Deteccion de la Geolocalizacion


const d = document,
    n = navigator;

export default function getGeolocation(id) {
    const $id = d.getElementById(id);
    if (!$id) {
    $id.innerHTML = `<p><mark>El elemento con el ID "${id}" no existe en el documento.</mark></p>`;
    return;
    }

    const options = {
    enableHighAccuracy: true,
    timeout: 5000, // Tiempo máximo para obtener la ubicación
    maximumAge: 0, // No usar caché
    };

    const success = (position) => {
    const coords = position.coords;

    $id.innerHTML = `
        <p>Tu posición actual es:</p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href= "https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
    };

    const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    };

    if (!n.geolocation) {
    $id.innerHTML = `<p><mark>La geolocalización no está disponible en este navegador.</mark></p>`;
    return;
    }

    n.geolocation.getCurrentPosition(success, error, options);
}
