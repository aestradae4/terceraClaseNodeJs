// global.test = 'Hola mundo';
// No es recomendable
// ------------------------------------------------------------------------

var url = 'http://gover.io/datos';

function dato(mensaje){
    //Envie un HTTP request
    console.log(mensaje); 
}

function leerDatos(){

}
// Al momento de exportarlas se vuelven publicas la funcion y la variable url
// .dato es un aleas module.exports.variable = variable;
module.exports.dato = dato;
module.exports = dato;
// module.exports.url = url;
// console.log(module);
