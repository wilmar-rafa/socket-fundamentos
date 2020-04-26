const { io } = require('../server.js');



io.on('connection', (client) => {

    console.log('Usuario conectado---');


    client.on('disconnect', () => {
        console.log('Usuario desconcectado******');
    });

    client.emit('mensajeAdmin', {
        nombre: 'Administrador',
        message: 'hola Bienvenido al chat!!!'
    });

    client.on('mensajeUsuario', (data, callback) => {

        client.broadcast.emit('mensajeAdmin', data);

        console.log(data);

        /*if (message.nombre) {
            callback({
                resp: 'Todo salio bien'
            });
        } else {
            callback({
                resp: 'Todo salio Mal!!!!!'
            });
        }*/

    });

});