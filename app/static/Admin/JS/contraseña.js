// JavaScript para manejar el cambio entre formularios

var con;
var recon;
const confirmPassword= document.getElementById('confirm-password').value.trim();
const password = document.getElementById('password').value.trim();

document.getElementById("next-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "block";
});
   // Redirección cuando se hace clic en "Crear Cuenta" en el segundo formulario
document.querySelector("#sing-up-2").addEventListener("submit", function(event) {
event.preventDefault(); // Evitar el comportamiento por defecto del formulario


// Si todo está bien, redirige al indexChronoGuard.html
window.location.href = '/Evaluacio Html/IndexChronoGuard.html'; 
});
