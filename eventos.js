// MODULO EVENTOS
// Emiter.emit(eventName[..args])

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Registrar el Listener
emitter.on('mensajeLoger', (arg) => { 
    console.log('Listener llamado...', arg);
})

//Registrar el evento 
emitter.emit('mensajeLoger', { id:1, url:'http://prueba.com'});