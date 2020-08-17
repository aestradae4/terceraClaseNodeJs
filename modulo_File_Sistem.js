// File Sistem

// De forma no asincrona cuando son pocos archivos
const fs = require('fs');
const archivos = fs.readdirSync('./');
console.log(archivos);

// De forma asincrona cuando son mas archivos por leer
// Metodo callback 

const fs = require('fs');
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Resultados', files);
})