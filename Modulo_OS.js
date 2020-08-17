const os = require('os');

var memoriaLibre = os.freemem();
var memoriaTotal = os.totalmem();
var nombreUsuario = os.hostname();

console.log(`Nombre de usuario: ${nombreUsuario}`);
console.log(`Memoria libre: ${memoriaLibre}`);
console.log(`Memoria total: ${memoriaTotal}`);
