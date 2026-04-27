let musicaIniciada = false;
const YOUTUBE_URL = "https://www.youtube.com/embed/gyY5Z0TUWRY?autoplay=1&loop=1&playlist=gyY5Z0TUWRY&mute=0&controls=0&enablejsapi=1";

// Función para abrir capítulos
function abrirCapitulo(id) {
    if (!musicaIniciada) {
        const iframe = document.getElementById('musica-fondo');
        if (iframe) iframe.src = YOUTUBE_URL;
        musicaIniciada = true;
    }

    // Ocultar menú y todos los capítulos
    document.getElementById('menu-capitulos').style.display = 'none';
    document.querySelectorAll('.capitulo-seccion').forEach(cap => {
        cap.style.display = 'none';
        cap.classList.remove('visible');
    });

    // Mostrar el seleccionado
    const seleccionado = document.getElementById(id);
    if (seleccionado) {
        seleccionado.style.display = 'block';
        setTimeout(() => seleccionado.classList.add('visible'), 50);
    }
    window.scrollTo(0, 0);
}

// Función para volver al menú
function volverAlMenu() {
    document.querySelectorAll('.capitulo-seccion').forEach(cap => {
        cap.classList.remove('visible');
        cap.style.display = 'none';
    });
    document.getElementById('menu-capitulos').style.display = 'block';
}

// Escuchar los clics cuando cargue la página
document.addEventListener("DOMContentLoaded", () => {
    // Configurar botones de capítulos
    document.querySelectorAll('.btn-capitulo').forEach(btn => {
        btn.addEventListener('click', () => {
            const destino = btn.getAttribute('data-target');
            abrirCapitulo(destino);
        });
    });

    // Configurar botones de volver
    document.querySelectorAll('.btn-volver').forEach(btn => {
        btn.addEventListener('click', volverAlMenu);
    });

    // Configurar el formulario de la licencia
    const inputs = ['input-yo', 'input-pareja', 'input-firma'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', () => {
                document.getElementById('txt-' + id.split('-')[1]).textContent = el.value;
            });
        }
    });
});
