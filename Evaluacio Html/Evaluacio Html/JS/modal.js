const modal = document.getElementById('login-modal'); 
const modalElement = new bootstrap.Modal(modal);
const buttons = document.querySelectorAll("button[onClick*='login']"); 
const closeModal = document.querySelector('.modal .close'); 


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex'; 
    });
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
});


window.addEventListener('click', (event) => {
    if (event.target === modal) { 
        modal.style.display = 'none'; 
    }
});
