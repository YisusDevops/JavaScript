import hamburgerMenu from "./01-.js";
import { alarm } from "./03-.js";
import countdown from "./04-.js";
import scrollTopButton from "./05-.js";
import darkTheme from "./06-.js";
import responsiveMedia from "./07-.js";
import responsiveTester from "./08-.js";
import userDeviceInfo from "./09-.js";
import networkStatus from "./10-.js";
import getGeolocation from "./11-.js";




const d= document;

d.addEventListener("DOMContentLoaded",(e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a");
    alarm(".. /assets/alarm-01.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown(
        "countdown", 
        "Jan 01,2025 01:01:25", 
        "Happy New Year 2025🎉"
    );

    scrollTopButton(".scroll-top-btn"); 
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        "Contenido Movil",
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/gKOPTUBHKms?si=u3HdHMpJ999oxkMp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    );
    
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        "Contenido Movil",
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14714.984589818263!2d-102.57860424453148!3d22.774800204380085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824e8e11d7d603%3A0x4196a8a29dca4635!2sZacatecas%20Centro%2C%20Zacatecas%2C%20Zac.!5e0!3m2!1ses!2smx!4v1735321190416!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    getGeolocation("geolocation");
});

darkTheme(".dark-theme-btn","dark-mode"); 
networkStatus();