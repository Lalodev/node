const express = require('express');
const router = express.Router();

//app.get('/', (req, res) => {

router.get('/', (req, res) => {
  //console.log(__dirname);
  //res.send('Mi respuesta desde Express v2!');
  res.render('index', { titulo: 'mi titulo dinámico' });
});

router.get('/servicios', (req, res) => {
  res.render('servicios', {
    tituloServicios: 'Este es un mensaje dinámico de servicios',
  });
});

module.exports = router;
