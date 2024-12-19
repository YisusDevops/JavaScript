let edad = 15; 

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if (edad >13) {
    console.log('Usuario debe ser acompañado por sus padres');
} else {
    console.log('Usuario menor de edad');
}

// este codigo cumple con ambas condiciones pero las evaluaciones se van a ejecutar de arriba hacia abajo y la primera condicion que se cumpla es la que se va a ejecutar y el resto van a ser ignoradas