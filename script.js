document.addEventListener("DOMContentLoaded", function () {

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

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            
            document.getElementById("mensajeConfirmacion").style.display = "block";

            // Limpiar el formulario
            form.reset();
        });
    }
});
