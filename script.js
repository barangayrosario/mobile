document.addEventListener("DOMContentLoaded", () => {
    const showLoginPassword = document.getElementById('showLoginPassword');
    const showRegisterPassword = document.getElementById('showRegisterPassword');

    const loginPassword = document.getElementById('loginPassword');
    const registerPassword = document.getElementById('registerPassword');
    
    showLoginPassword.addEventListener('change', () => {
        loginPassword.type = showLoginPassword.checked ? 'text' : 'password';
    });
    showRegisterPassword.addEventListener('change', () => {
        registerPassword.type = showRegisterPassword.checked ? 'text' : 'password';
    });
});