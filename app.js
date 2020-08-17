// require('./datos');
// global.test = 'Finalizado';
// console.log(global.test);

// console.log(module);
// No es recomendable utilizar Global
// ----------------------------------------------------------------------------------

// Cargar un modulo

// Siempre se le asigna una variable en este caso fue "datos", recomendacion colocar siempre "const"

// var datos = require('./datos');
const dato = require('./datos');

// Aqui se llama a la propiedad que se exporta en datos.

// datos.dato('Hola mundo');
dato('Hola mundo');


// console.log(module);