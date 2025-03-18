document.addEventListener("DOMContentLoaded", function () {
    // Agregar desplazamiento suave al hacer clic en los enlaces del menú
    document.querySelectorAll('nav ul li a').forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                let destino = document.querySelector(this.getAttribute('href'));
                if (destino) {
                    destino.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Manejo del formulario de contacto
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Mostrar mensaje de confirmación
            document.getElementById("mensajeConfirmacion").style.display = "block";

            // Limpiar el formulario
            form.reset();
        });
    }
});
