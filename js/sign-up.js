function registerUser(username, email, password) {
    // convertir el correo electrónico a minúsculas
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
document.getElementById('register-button').addEventListener('click', function() {
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirm-password').value.trim();

    // verificar si algun campo esta vacio o consiste solo en espacios en blanco
    if (!username || !email || !password || !confirmPassword) {
        alert("Please complete all fields.");
        return;
    }

    // verificar si alguna contraseña no coincide
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    
    registerUser(username, email, password);
});