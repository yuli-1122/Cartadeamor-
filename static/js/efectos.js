document.addEventListener("DOMContentLoaded", () => {
    const YOUTUBE_URL = "https://www.youtube.com/embed/gyY5Z0TUWRY?autoplay=1";
    let musicaIniciada = false;

    // Función para mostrar capítulos
    const botones = document.querySelectorAll('.btn-capitulo');
    botones.forEach(btn => {
        btn.onclick = () => {
            const id = btn.getAttribute('data-target');
            
            // Iniciar música
            if (!musicaIniciada) {
                document.getElementById('musica-fondo').src = YOUTUBE_URL;
                musicaIniciada = true;
            }

            // Ocultar menú y mostrar sección
            document.getElementById('menu-capitulos').style.display = 'none';
            document.querySelectorAll('.capitulo-seccion').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('visible');
            });

            const seccion = document.getElementById(id);
            seccion.style.display = 'block';
            setTimeout(() => seccion.classList.add('visible'), 50);
        };
    });

    // Función para volver
    document.querySelectorAll('.btn-volver').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.capitulo-seccion').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('visible');
            });
            document.getElementById('menu-capitulos').style.display = 'block';
        };
    });

    // Lógica de la licencia
    const inputs = ['input-yo', 'input-pareja', 'input-firma'];
    inputs.forEach(id => {
        const inputEl = document.getElementById(id);
        if (inputEl) {
            inputEl.oninput = () => {
                const textId = id.replace('input', 'txt');
                document.getElementById(textId).innerText = inputEl.value;
            };
        }
    });
});
