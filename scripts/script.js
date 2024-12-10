// script.js
let currentIndex = 0; // Empieza en la primera imagen
const items = document.querySelectorAll('.carousel-item'); // Obtiene todas las imágenes
const totalItems = items.length;

function moveToNext() {
    currentIndex = (currentIndex + 1) % totalItems; // Sube el índice y vuelve al principio cuando llega al final
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100; // Mueve el carousel a la izquierda según el índice
    carousel.style.transform = `translateX(${offset}%)`;
}

// Mueve automáticamente cada 3 segundos
setInterval(moveToNext, 3000);

// Inicia el carousel
updateCarousel();
