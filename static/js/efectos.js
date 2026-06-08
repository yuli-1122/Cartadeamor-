document.addEventListener("DOMContentLoaded", () => {
    let musicaIniciada = false;

    const botones = document.querySelectorAll('.btn-capitulo');
    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-target');

            if (!musicaIniciada && id === "cap1") {
                const audio = document.getElementById('musica-fondo');
                audio.volume = 0.5;
                audio.play().catch(e => console.log("Esperando clic..."));
                musicaIniciada = true;
            }

            document.getElementById('menu-capitulos').style.display = 'none';

            document.querySelectorAll('.capitulo-seccion').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('visible');
            });

            const seccion = document.getElementById(id);
            seccion.style.display = 'block';
            setTimeout(() => seccion.classList.add('visible'), 50);
        });
    });

    document.querySelectorAll('.btn-volver').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.capitulo-seccion').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('visible');
            });
            document.getElementById('menu-capitulos').style.display = 'block';
        });
    });

    const inputs = ['input-yo', 'input-pareja', 'input-firma'];
    inputs.forEach(id => {
        const inputEl = document.getElementById(id);
        if (inputEl) {
            inputEl.addEventListener('input', () => {
                const textId = id.replace('input', 'txt');
                document.getElementById(textId).textContent = inputEl.value;
            });
        }
    });

    function crearCorazon() {
        const corazon = document.createElement('div');
        corazon.innerHTML = '❤️';
        corazon.classList.add('corazon');
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.animationDuration = (Math.random() * 3 + 2) + 's';
        corazon.style.fontSize = (Math.random() * 20 + 15) + 'px';
        document.body.appendChild(corazon);
        setTimeout(() => corazon.remove(), 4000);
    }
    setInterval(crearCorazon, 300);
});
