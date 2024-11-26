function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyBXqyTHGdxJwP6OydLQD9VeqilJl-si0h0', // Reemplaza con tu API Key
        clientId: '609812063852-o48rdsd95u63mgjikg5e4ug48d7k0l5u.apps.googleusercontent.com', // Reemplaza con tu Client ID
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: "https://www.googleapis.com/auth/calendar"
    }).then(function () {
        // Verificar si el usuario ya está autenticado
        if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
            listUpcomingEvents();
        } else {
            // Si no está autenticado, iniciar sesión
            gapi.auth2.getAuthInstance().signIn().then(listUpcomingEvents);
        }
    });
}

// Cargar la API de Google
function handleClientLoad() {
    gapi.load("client:auth2", initClient);
}

// Listar eventos próximos
function listUpcomingEvents() {
    gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'maxResults': 10,
        'singleEvents': true,
        'orderBy': 'startTime'
    }).then(function(response) {
        const events = response.result.items;
        if (events.length > 0) {
            events.forEach(event => {
                const when = event.start.dateTime || event.start.date;
                console.log(`${event.summary} (${when})`);
            });
        } else {
            console.log('No upcoming events found.');
        }
    });
}

function addEvent() {
    const event = {
        'summary': 'Nuevo Evento',
        'location': 'Ubicación',
        'description': 'Descripción del evento',
        'start': {
            'dateTime': '2023-10-01T10:00:00-07:00', // Cambia la fecha y hora
            'timeZone': 'America/Los_Angeles',
        },
        'end': {
            'dateTime': '2023-10-01T11:00:00-07:00', // Cambia la fecha y hora
            'timeZone': 'America/Los_Angeles',
        },
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10},
            ],
        },
    };
    gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event,
    }).then(function(response) {
        console.log('Evento creado: ' + response.htmlLink);
    });
}