import hamburgerMenu from "./01-.js";
import { alarm } from "./03-.js";
import countdown from "./04-.js";




const d= document;

d.addEventListener("DOMContentLoaded",(e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a");
    alarm(".. /assets/alarm-01.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown(
        "countdown", 
        "Jan 01,2025 01:01:25", 
        "Happy New Year🎉"
    );
});


