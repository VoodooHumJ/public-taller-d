const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const express = require('express');
const app = express();
const PORT = 3000; // Puedes elegir cualquier puerto que no esté en uso

let messages = [];

io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');

    // Enviar mensajes existentes al nuevo usuario
    socket.emit('loadMessages', messages);

    // Escuchar mensajes nuevos
    socket.on('sendMessage', (message) => {
        messages.push(message);
        io.emit('newMessage', message); // Enviar a todos los usuarios
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto http://localhost:8080');
});


app.get('/', (req, res) => {
    res.send('¡Hola, mundo!'); // Respuesta simple para verificar que funciona
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:8080`);
});