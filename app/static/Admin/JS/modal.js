document.addEventListener("DOMContentLoaded", function () {
    const loginIcon = document.getElementById("login-icon");
    const modal = document.getElementById("login-modal");
    const closeBtn = document.querySelector(".close");

    // Abrir modal al hacer clic en el ícono
    loginIcon.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Cerrar modal al hacer clic en la X
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal si el usuario hace clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});