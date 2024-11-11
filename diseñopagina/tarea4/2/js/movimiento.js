
const mensaje = document.getElementById("mensaje");
let posicionX = -mensaje.offsetHeight; // inicializa fuera de la pantalla
const velocidad = 2; // velocidad de movimiento (mayor número es más rápido)

function movermensaje() {
    posicionX += velocidad;
    if (posicionX > window.innerWidth) { 
        posicionX = -mensaje.offsetHeight; // reiniciar la posición al final de la pantalla
    }
    mensaje.style.left = posicionX + "px";
    requestAnimationFrame(movermensaje); 
}

movermensaje();