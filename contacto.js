window.onload = function() {
    const menu = document.querySelector('.menu');
    const logo2 = document.getElementById('logo2');

    setTimeout(() => {
        menu.classList.add('show-menu'); // Agregar clase para mostrar el menú
    }, 500); // 2000 ms = 2 segundos

    // Esperar 4 segundos (2 segundos del hero + 2 segundos del menú) antes de mostrar el logo
    setTimeout(() => {
        logo2.classList.add('show-logo'); // Agregar clase para mostrar el logo
    }, 1000); // 4000 ms = 4 segundos

};

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el footer
    const footer = document.querySelector('.footer');
    
    // Agrega la clase 'fade-in' al footer para activar la transición
    footer.classList.add('fade-in');
});