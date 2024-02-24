// función para comprobar si el usuario existe en el LS
function loginUser(email, password) {
    // Convertir el correo electrónico a minúsculas
    email = email.toLowerCase();
    
    // tomar los datos del usuario del LS en base al email registrado
    var userDataJSON = localStorage.getItem(email);

    // chequear si el objeto userDataJSON existe
    if (userDataJSON) {
        // convertir los datos del usuario nuevamente a object
        var userData = JSON.parse(userDataJSON);

        // chequear si la contraseña proporcionada coincide con la obtenida desde el LS
        if (userData.password === password) {
            alert("Welcome back, " + userData.username + "!");
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        // el usuario no existe
        alert("User does not exist. Please try again.");
    }
}

// prevenir acción por defecto del botón
document.getElementById('login-button').addEventListener('click', function(e) {
    e.preventDefault();

    // capturar los valores desde el input
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // iniciar sesión del usuario
    loginUser(email, password);
});