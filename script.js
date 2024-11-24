window.onload = function() {
    const hero = document.querySelector('.hero');
    const menu = document.querySelector('.menu');
    const logo2 = document.getElementById('logo2');

     
    hero.classList.add('show-hero');

     
    setTimeout(() => {
        menu.classList.add('show-menu');  
    }, 2000);  

     
    setTimeout(() => {
        logo2.classList.add('show-logo');  
    }, 3000);  
};
