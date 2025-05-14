document.getElementById("next-button").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el botón recargue la página

    // Oculta el primer formulario y muestra el segundo
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "block";
});

// Maneja el envío del segundo formulario (Crear Cuenta)
document.querySelector("#sing-up-2").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Aquí puedes hacer validaciones (por ejemplo, verificar contraseñas)

    // Si todo está bien, redirige al usuario a la página principal
    window.location.href = "./Evaluacio Html/IndexChronoGuard.html"; // Asegúrate de que la ruta exista
});