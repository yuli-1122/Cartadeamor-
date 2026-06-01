// --- EFECTOS PRINCIPALES DE LA CARTA DE AMOR ---
// Este script controla la navegación entre capítulos, la música de fondo y la lógica de la licencia

document.addEventListener("DOMContentLoaded", () => {
    // 🎵 URL del video de YouTube que se usará como música de fondo
    const YOUTUBE_URL = "https://www.youtube.com/embed/gyY5Z0TUWRY?autoplay=1";
    let musicaIniciada = false; // Bandera para iniciar la música solo una vez

    // --- 📖 LÓGICA DE BOTONES DE CAPÍTULOS ---
    const botones = document.querySelectorAll('.btn-capitulo');
    botones.forEach(btn => {
        btn.onclick = () => {
            const id = btn.getAttribute('data-target'); // Obtiene el ID de la sección a mostrar
            
            // 🎶 Inicia la música al abrir el primer capítulo
            if (!musicaIniciada) {
                document.getElementById('musica-fondo').src = YOUTUBE_URL;
                musicaIniciada = true;
            }

            // 🔒 Oculta el menú principal
            document.getElementById('menu-capitulos').style.display = 'none';

            // 🔄 Oculta todas las secciones de capítulos
            document.querySelectorAll('.capitulo-seccion').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('visible');
            });

            // ✨ Muestra la sección seleccionada con animación
            const seccion = document.getElementById(id);
            seccion.style.display = 'block';
            setTimeout(() => seccion.classList.add('visible'), 50);
        };
    });

    // --- 🔙 LÓGICA DE BOTONES "VOLVER" ---
    document.querySelectorAll('.btn-volver').forEach(btn => {
        btn.onclick = () => {
            // Oculta todas las secciones activas
            document.querySelectorAll('.capitulo-seccion').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('visible');
            });
            // 📌 Vuelve a mostrar el menú principal
            document.getElementById('menu-capitulos').style.display = 'block';
        };
    });

    // --- 📜 LÓGICA DE LA LICENCIA ---
    // Inputs que se reflejan en la imagen de la licencia
    const inputs = ['input-yo', 'input-pareja', 'input-firma'];
    inputs.forEach(id => {
        const inputEl = document.getElementById(id);
        if (inputEl) {
            inputEl.oninput = () => {
                // Convierte el ID del input en el ID del texto overlay
                const textId = id.replace('input', 'txt');
                document.getElementById(textId).innerText = inputEl.value;
            };
        }
    });
});
