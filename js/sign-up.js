// función para registrar un nuevo usuario
function registerUser(username, email, password) {
    // Convertir el correo electrónico a minúsculas
    email = email.toLowerCase();

    // chequear si el usuario existe en el LS antes de registrar
    if (localStorage.getItem(email)) {
        alert("User already exists. Please try again.");
        return;
    }

    var userData = {
        username: username,
        email: email,
        password: password
    };

    // convertir el tipo de dato objecto a string para su utilización en LS
    var userDataJSON = JSON.stringify(userData);

    // setear el email como "llave" para validar después
    localStorage.setItem(email, userDataJSON);
    alert("Registration successful!");
    window.location.href = "log-in.html";
}

// click para quitar el evento por defecto del botón
document.getElementById('register-button').addEventListener('click', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    
    registerUser(username, email, password);
});