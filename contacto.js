window.onload = function() {
    const menu = document.querySelector('.menu');
    const logo2 = document.getElementById('logo2');

    setTimeout(() => {
        menu.classList.add('show-menu'); 
    }, 0);  

     
    setTimeout(() => {
        logo2.classList.add('show-logo');  
    }, 0);  

};

document.addEventListener("DOMContentLoaded", function() {
    
    const footer = document.querySelector('.footer');
    
    
    footer.classList.add('fade-in');
});

