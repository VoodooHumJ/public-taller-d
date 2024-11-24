const fadeout = () => {
    const loaderwrapper = 
    document.querySelector('.loader');
    loaderwrapper.classList.add('fade');
}

window.addEventListener('load', fadeout);