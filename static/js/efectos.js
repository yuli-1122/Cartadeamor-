let musicaIniciada = false;
const YOUTUBE_URL = "https://www.youtube.com/embed/gyY5Z0TUWRY?autoplay=1&loop=1&playlist=gyY5Z0TUWRY&mute=0&controls=0&enablejsapi=1";

function abrirCapitulo(id) {
  if (!musicaIniciada) {
    const iframe = document.getElementById('musica-fondo');
    if (iframe) {
      iframe.src = YOUTUBE_URL;
    }
    musicaIniciada = true;
  }

  document.getElementById('menu-capitulos').style.display = 'none';
  document.querySelectorAll('.capitulo-seccion').forEach(cap => {
    cap.classList.remove('visible');
    cap.style.display = 'none'; // Asegura que no ocupen espacio
  });
  
  const capSeleccionado = document.getElementById(id);
  capSeleccionado.style.display = 'block'; 
  // Timeout pequeño para permitir que el display block se aplique antes de la animación
  setTimeout(() => capSeleccionado.classList.add('visible'), 10);
  window.scrollTo(0, 0);
}

function volverAlMenu() {
  document.querySelectorAll('.capitulo-seccion').forEach(cap => {
    cap.classList.remove('visible');
    cap.style.display = 'none';
  });
  document.getElementById('menu-capitulos').style.display = 'block';
}

function actualizarLicencia() {
  document.getElementById('txt-yo').textContent = document.getElementById('input-yo').value;
  document.getElementById('txt-pareja').textContent = document.getElementById('input-pareja').value;
  document.getElementById('txt-firma').textContent = document.getElementById('input-firma').value;
}

document.addEventListener("DOMContentLoaded", () => {
  // Configurar listeners de botones de capítulos
  const botonesCap = document.querySelectorAll('.btn-capitulo');
  botonesCap.forEach(btn => {
    btn.addEventListener('click', () => abrirCapitulo(btn.dataset.target));
  });

  // Configurar listeners de botones volver
  const botonesVolver = document.querySelectorAll('.btn-volver');
  botonesVolver.forEach(btn => {
    btn.addEventListener('click', volverAlMenu);
  });

  // Configurar listeners de la licencia
  const inputs = ['input-yo', 'input-pareja', 'input-firma'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', actualizarLicencia);
  });

  function crearCorazon() {
    const corazon = document.createElement("div");
    const iconos = ["💖", "❤️", "💕", "💗", "🌹", "✨"];
    corazon.innerHTML = iconos[Math.floor(Math.random() * iconos.length)];
    
    // Generar valores aleatorios para variedad
    const tamaño = Math.random() * (35 - 15) + 15; // Entre 15px y 35px
    const duracion = Math.random() * (8 - 4) + 4;   // Entre 4s y 8s (más lento o rápido)
    const opacidad = Math.random() * (1 - 0.5) + 0.5; // Diferentes transparencias
    const retraso = Math.random() * 2; // Retraso aleatorio para naturalidad

    Object.assign(corazon.style, {
      position: "fixed",
      left: Math.random() * 100 + "vw",
      top: "-50px",
      fontSize: tamaño + "px",
      animation: `caer ${duracion}s linear infinite`,
      animationDelay: `-${retraso}s`,
      zIndex: "1000",
      pointerEvents: "none",
      opacity: opacidad
    });
    document.body.appendChild(corazon);
    setTimeout(() => corazon.remove(), duracion * 1000);
  }
  setInterval(crearCorazon, 700); // Un poco más frecuentes para llenar la pantalla
});s
