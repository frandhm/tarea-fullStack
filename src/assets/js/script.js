function validacion() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    alert("Formulario enviado con éxito.");
    return true;
}