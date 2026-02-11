const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

// Lógica para el botón SÍ (Mensaje bonito)
yesBtn.addEventListener('click', () => {
    Swal.fire({
        title: '¡Sabía que dirías que sí! ❤️',
        text: 'Eres la persona más especial del mundo.',
        imageUrl: 'Ositos.gif', 
        imageWidth: 200,
        imageHeight: 200,
        confirmButtonColor: '#ff54a4',
        confirmButtonText: '¡Aceptar!',
        background: '#fff',
        color: '#ff54a4'
    });
});

// Lógica para el botón NO (El botón que se escapa)
noBtn.addEventListener('mouseover', () => {
    // Calculamos una posición aleatoria dentro de la ventana
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Aplicamos las nuevas coordenadas
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});