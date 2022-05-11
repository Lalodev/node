const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Conexión a Base de Datos
const mongoose = require('mongoose');

const user = 'lalosmongo';
const password = '1379Irasema';
const dbname = 'veterinaria';
const uri = `mongodb+srv://${user}:${password}@cluster0.f8nc0.mongodb.net/${dbname}?retryWrites=true&w=majority;`;

mongoose
  .connect(uri)
  .then(() => console.log('Base de Datos conectada'))
  .catch((e) => console.log(e));

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

//Rutas Web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

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
