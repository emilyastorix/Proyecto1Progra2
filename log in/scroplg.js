// login.js

// Capturamos el formulario y evitamos el comportamiento por defecto
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Opcional: Validaciones (puedes agregar las tuyas)
    var email = document.getElementById('formEmail').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var termsAccepted = document.getElementById('exampleCheck1').checked;

    if (email === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return; // Si los campos están vacíos, no hacemos la redirección
    }

    if (!termsAccepted) {
        alert("Debes aceptar los términos y condiciones.");
        return;
    }

    // Redirigir a la nueva página si los datos son válidos
    window.location.href = "bienvenido.html"; // Cambia esto por el nombre de la página a la que deseas redirigir
});
