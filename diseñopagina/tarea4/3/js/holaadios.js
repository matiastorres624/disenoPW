// Mensaje de bienvenida al cargar la página
window.onload = function() {
  const messageElement = document.getElementById("message");
  messageElement.textContent = "¡Bienvenido a nuestra página!";
};

// Mensaje de despedida al salir de la página
window.onbeforeunload = function() {
  return "¿Estás seguro de que quieres salir?";
};