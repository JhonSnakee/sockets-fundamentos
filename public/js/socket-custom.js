var socket = io();
socket.on('connect', function() {
    console.log('Concectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el server'); 
});

socket.emit('eviarMensaje', {
    usuario: 'Jhon',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('Respuesta server:', res);
});

socket.on('eviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});
    