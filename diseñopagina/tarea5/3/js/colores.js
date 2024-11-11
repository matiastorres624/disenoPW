// Obtener todos los botones de color
const colorButtons = document.querySelectorAll('.color-button');

// Agregar un evento de clic a cada botón
colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Obtener el color del atributo data-color
        const color = this.getAttribute('data-color');
        
        // Cambiar el color de fondo del body
        document.body.style.backgroundColor = color;
    });
});