window.onload = function() {
    const hero = document.querySelector('.hero');
    const menu = document.querySelector('.menu');
    const logo2 = document.getElementById('logo2');

    // Mostrar el hero
    hero.classList.add('show-hero');

    // Esperar 2 segundos (la duración de la transición del hero) antes de mostrar el menú
    setTimeout(() => {
        menu.classList.add('show-menu'); // Agregar clase para mostrar el menú
    }, 2000); // 2000 ms = 2 segundos

    // Esperar 4 segundos (2 segundos del hero + 2 segundos del menú) antes de mostrar el logo
    setTimeout(() => {
        logo2.classList.add('show-logo'); // Agregar clase para mostrar el logo
    }, 4000); // 4000 ms = 4 segundos
};
