// Verificar la informacion donde se encuentra cada documento
// console.log(__dirname);
// console.log(__filename);

// funcion path
const path = require('path');
const objPath = path.parse(__filename);
console.log(objPath.root);