// Archivo script.js

document.addEventListener("DOMContentLoaded", function() {
    var mensaje = document.getElementById("mensaje");
    var manoBien = document.createElement("div");
    
    // Añadir la mano del gesto de bien al documento
    manoBien.innerHTML = "&#128077;"; // Código de emoji de mano con gesto de bien
    manoBien.id = "manoBien";
    mensaje.appendChild(manoBien);

    // Mostrar el mensaje y la mano con una animación después de un breve retraso
    setTimeout(function() {
        mensaje.style.display = "flex";
        mensaje.style.animation = "aparecer 2s ease-out";
        manoBien.style.animation = "aparecer 2s ease-out";
    }, 1000);
});
