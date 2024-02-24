// función para comprobar si el usuario existe en el LS y realizar el inicio de sesión
function loginUser(email, password) {
    email = email.toLowerCase();
    
    // validar campos vacíos
    if (email.trim() === '' || password.trim() === '') {
        alert("Please complete both fields.");
        return;
    }

    // tomar los datos del usuario del LS en base al email registrado
    let userDataJSON = localStorage.getItem(email);
    
    // chequear si el objeto userDataJSON existe
    if (userDataJSON) {
        // convertir los datos del usuario nuevamente a object
        let userData = JSON.parse(userDataJSON);

        // obtener el número de intentos fallidos para este usuario, si no existe, establecerlo en 3
        let failedAttempts = localStorage.getItem(email + "_attempts") || 3;
        
        // bucle para permitir hasta 3 intentos fallidos
        while (failedAttempts > 0) {
            // chequear si la contraseña proporcionada coincide con la obtenida desde el LS
            if (userData.password === password) {
                alert("Welcome back, " + userData.username + "!");
                window.location.href = "https://www.coderhouse.com.uy/";
                // restablecer el contador de intentos fallidos para este usuario
                localStorage.setItem(email + "_attempts", 3);
                break; // salir de la función si la contraseña es correcta
            } else {
                failedAttempts--; // reducir la cantidad de intentos fallidos
                localStorage.setItem(email + "_attempts", failedAttempts); // actualizar el número de intentos fallidos en el Local Storage
                if (failedAttempts === 0) {
                    document.getElementById('login-button').disabled = true;
                    document.getElementById('login-button').innerText = "BLOCKED";
                    alert("You've exceeded the number of login attempts. Your account has been blocked.");
                    return;
                } else {
                    alert("Incorrect password. Please try again. Attempts left: " + failedAttempts);
                    return;
                }
            }
        }
    } else {
        // el usuario no existe
        alert("User does not exist. Please try again.");
    }
}

// prevenir acción por defecto del botón
document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();

    // capturar los valores desde el input
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // iniciar sesión del usuario
    loginUser(email, password);
});