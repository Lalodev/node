const express = require('express');
const app = express();
const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //console.log(__dirname);
  //res.send('Mi respuesta desde Express v2!');
  res.render('index', { titulo: 'mi titulo dinámico' });
});

app.get('/servicios', (req, res) => {
  res.render('servicios', {
    tituloServicios: 'Este es un mensaje dinámico de servicios',
  });
});

app.use((req, res, next) => {
  //res.status(404).sendFile(__dirname + '/public/404.html');
  res.status(404).render('404', {
    titulo: '404',
    descripcion: 'Título del sitio web',
  });
});

app.listen(port, () => {
  console.log(`Servidor a su servicio en el puerto ${port}`);
});

//Node ---------------------------------------------------------
/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World v2');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

// npm install -g nodemon

//nodemon filename.js

//npm install express
