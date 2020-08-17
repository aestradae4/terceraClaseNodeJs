// MODULO HTTP
const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('Hola mundo');
        res.end();
    }

    if(req.url === '/api/productos'){
        res.write(JSON.stringify(['Mouse', 'Teclado', 'Pantalla']));
        res.end();
    }
});

server.on('connection', (puerto)=>{
    console.log('Nueva conexion..');
})

server.listen(3000);
console.log('Servidor escuchando el puerto 3000...');