document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const modal = document.getElementById('modalNuevoTema');
    const btnNuevo = document.getElementById('btnNuevoTema');
    const span = document.getElementsByClassName('close')[0];
    const formNuevoTema = document.getElementById('formNuevoTema');
    const debatesList = document.querySelector('.debates-list');

    // Manejadores del modal
    btnNuevo.onclick = () => modal.style.display = "block";
    span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    }

    // Manejar el envío del formulario
    formNuevoTema.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Recoger los datos del formulario
        const debateData = {
            titulo: document.getElementById('titulo').value,
            categoria: document.getElementById('categoria').value,
            contenido: document.getElementById('contenido').value,
            fecha: new Date(),
            autor: {
                nombre: 'Usuario Actual', // Esto debería venir de la sesión del usuario
                avatar: 'ruta/avatar-default.jpg'
            }
        };

        try {
            // Crear el nuevo debate
            await crearNuevoDebate(debateData);
            
            // Añadir el debate a la lista
            agregarDebateALista(debateData);
            
            // Limpiar y cerrar el formulario
            formNuevoTema.reset();
            modal.style.display = "none";
            
            // Mostrar mensaje de éxito
            mostrarNotificacion('Debate creado exitosamente', 'success');
            
        } catch (error) {
            mostrarNotificacion('Error al crear el debate', 'error');
            console.error('Error:', error);
        }
    });

    // Función para crear el debate (conectar con backend)
    async function crearNuevoDebate(debateData) {
        // Aquí iría la llamada al backend
        // Por ahora simulamos una respuesta exitosa
        return new Promise((resolve) => {
            setTimeout(() => resolve({ success: true }), 500);
        });
    }

    // Función para añadir el debate a la lista
    function agregarDebateALista(debate) {
        const debateHTML = `
            <div class="debate-card">
                <div class="debate-header">
                    <img src="${debate.autor.avatar}" alt="Avatar" class="avatar">
                    <div class="debate-info">
                        <h3>${debate.titulo}</h3>
                        <span class="categoria">${debate.categoria}</span>
                        <span class="autor">Por: ${debate.autor.nombre}</span>
                        <span class="fecha">Justo ahora</span>
                    </div>
                    <div class="debate-stats">
                        <span><i class="fas fa-comment"></i> 0</span>
                        <span><i class="fas fa-heart"></i> 0</span>
                    </div>
                </div>
                <div class="debate-content">
                    <p>${debate.contenido}</p>
                </div>
                <div class="debate-footer">
                    <button class="btn-responder">Responder</button>
                    <button class="btn-seguir">Seguir debate</button>
                </div>
            </div>
        `;

        debatesList.insertAdjacentHTML('afterbegin', debateHTML);
    }

    // Función para mostrar notificaciones
    function mostrarNotificacion(mensaje, tipo) {
        const notificacion = document.createElement('div');
        notificacion.className = `notificacion ${tipo}`;
        notificacion.textContent = mensaje;
        document.body.appendChild(notificacion);

        setTimeout(() => {
            notificacion.remove();
        }, 3000);
    }
}); 