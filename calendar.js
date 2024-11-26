document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el calendario
    const calendar = new tui.Calendar('#calendar', {
        defaultView: 'month',
        usageStatistics: false,
        isReadOnly: false,
        // Configurar vistas disponibles
        week: {
            startDayOfWeek: 1,
            dayNames: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            workweek: false,
            showTimezoneCollapseButton: true,
            timezonesCollapsed: false
        },
        month: {
            startDayOfWeek: 1,
            dayNames: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            workweek: false
        },
        // Configurar vista de año
        year: {
            startDayOfWeek: 1,
            dayNames: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            workweek: false,
            visibleWeeksCount: 6,
            scheduleView: true
        },
        timezone: {
            zones: [
                {
                    timezoneName: 'America/Lima',
                }
            ]
        },
        theme: {
            common: {
                backgroundColor: 'white',
                border: '1px solid #e5e5e5',
                gridSelection: {
                    backgroundColor: 'rgba(81, 92, 230, 0.05)',
                    border: '1px solid #515ce6'
                }
            }
        }
    });

    // Configurar los botones de navegación
    document.getElementById('prevButton').addEventListener('click', () => {
        calendar.prev();
        updateCurrentDate();
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        calendar.next();
        updateCurrentDate();
    });

    document.getElementById('todayButton').addEventListener('click', () => {
        calendar.today();
        updateCurrentDate();
    });

    // Configurar los botones de vista
    document.getElementById('dayButton').addEventListener('click', () => {
        calendar.changeView('day');
        updateCurrentDate();
    });

    document.getElementById('weekButton').addEventListener('click', () => {
        calendar.changeView('week');
        updateCurrentDate();
    });

    document.getElementById('monthButton').addEventListener('click', () => {
        calendar.setOptions({
            month: {
                visibleWeeksCount: 6,
                workweek: false,
                scheduleView: true
            }
        });
        calendar.changeView('month');
        updateCurrentDate();
        
        // Restaurar altura original
        document.getElementById('calendar').style.height = '800px';
    });

    // Modificar el manejador del botón de año
    document.getElementById('yearButton').addEventListener('click', () => {
        // Cambiar a vista de año
        calendar.setOptions({
            month: {
                visibleWeeksCount: 52, // Mostrar todo el año
                workweek: false,
                scheduleView: true
            }
        });
        calendar.changeView('year');
        updateCurrentDate();
        
        // Ajustar la altura del contenedor para la vista de año
        document.getElementById('calendar').style.height = '1200px';
    });

    // Modal y formulario
    const modal = document.getElementById('eventModal');
    const newEventButton = document.getElementById('newEventButton');
    const closeButton = document.getElementsByClassName('close')[0];
    const eventForm = document.getElementById('eventForm');

    // Abrir modal
    newEventButton.onclick = function() {
        modal.style.display = 'block';
    }

    // Cerrar modal
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Manejar el formulario
    eventForm.onsubmit = function(e) {
        e.preventDefault();
        
        const eventData = {
            id: String(Date.now()),
            title: document.getElementById('eventTitle').value,
            start: new Date(document.getElementById('eventStart').value),
            end: new Date(document.getElementById('eventEnd').value),
            category: document.getElementById('eventCategory').value,
            description: document.getElementById('eventDescription').value
        };

        calendar.createEvents([eventData]);
        
        modal.style.display = 'none';
        eventForm.reset();
    }

    // Función para actualizar la fecha actual
    function updateCurrentDate() {
        const dateRangeText = calendar.getDateRangeText();
        document.getElementById('currentDate').textContent = dateRangeText;
    }

    // Actualizar fecha inicial
    updateCurrentDate();
});    