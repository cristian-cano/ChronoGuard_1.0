document.querySelector("#sing-up-2").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden.',
        });
        return;
    }

    // Si todo está bien, redirige al indexChronoGuard.html
    window.location.href = '/Evaluacio Html/IndexChronoGuard.html'; 
});
    