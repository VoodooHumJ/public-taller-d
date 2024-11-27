document.getElementById('logout-button').addEventListener('click', async function(e) {
    e.preventDefault();
    
    try {
        // Preguntar al usuario si está seguro
        const confirmar = confirm('¿Estás seguro que deseas cerrar sesión?');
        
        if (confirmar) {
            // Cerrar sesión de Google
            google.accounts.id.disableAutoSelect();
            
            // Limpiar datos locales
            localStorage.clear(); // Limpia todos los datos del localStorage
            
            // Opcional: Mostrar mensaje de éxito
            alert('Sesión cerrada exitosamente');
            
            // Redirigir a index.html
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        alert('Hubo un error al cerrar sesión. Por favor, intenta nuevamente.');
    }
});