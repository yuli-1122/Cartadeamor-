// --- EFECTOS PRINCIPALES DE LA CARTA DE AMOR ---
document.addEventListener("DOMContentLoaded", () => {
    let musicaIniciada = false; // Bandera para iniciar la música solo una vez

    // 📖 LÓGICA DE BOTONES DE CAPÍTULOS
    const botones = document.querySelectorAll('.btn-capitulo');
    botones.forEach(btn => {
        btn.onclick = () => {
            const id = btn.getAttribute('data-target'); // ID de la sección a mostrar
            
            // 🎶 Inicia la música SOLO si es Capítulo I
            if (!musicaIniciada && id === "cap1") {
                const audio = document.getElementById('musica-fondo');
                audio.play(); // Reproduce el sonido
                musicaIniciada = true;
            }

            // 🔒 Oculta el menú principal
            document.getElementById('menu-capitulos').style.display = 'none';

            // 🔄 Oculta todas las secciones
            document.querySelectorAll('.capitulo-seccion').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('visible');
            });

            // ✨ Muestra la sección seleccionada
            const seccion = document.getElementById(id);
            seccion.style.display = 'block';
            setTimeout(() => seccion.classList.add('visible'), 50);
        };
    });

    // 🔙 LÓGICA DE BOTONES "VOLVER"
    document.querySelectorAll('.btn-volver').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.capitulo-seccion').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('visible');
            });
            document.getElementById('menu-capitulos').style.display = 'block';
        };
    });

    // 📜 LÓGICA DE LA LICENCIA
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
