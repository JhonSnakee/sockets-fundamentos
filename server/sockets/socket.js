const {io} = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('eviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la app'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    client.on('eviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('eviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        });

        // if (data.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // }else{
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!!!!!!!'
        //     });
        // };
    });
});