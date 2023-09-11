document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue

        // Obtiene los elementos de entrada del formulario
        const emailInput = form.elements.email;
        const passwordInput = form.elements.password;

        // Obtiene los valores de entrada
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Verifica si algún campo está vacío
        if (!emailValue || !passwordValue) {
            alert("Todos los campos deben ser completados.");
            return; // Detiene el envío del formulario si faltan datos
        }

        // Crea un objeto con los datos del formulario
        const formData = {
            email: emailValue,
            password: passwordValue,
        };

        // Muestra los datos en la consola
        console.log(formData);

        // Reinicia el formulario
        form.reset();
    });
});
