var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor....');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.emit('mensajeUsuario', {
        nombre: 'Wilmar',
        message: 'hola Mundo'
    },
    function(resp) {
        console.log(resp);
    });

socket.on('mensajeAdmin', function(message) {
    console.log(message);
});