const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    console.log(arrayMascotasDB);

    res.render('mascotas', {
      arrayMascotas: arrayMascotasDB,

      /*arrayMascotas: [
        { id: '1', nombre: 'rex', descripcion: 'rex descripcion' },
        { id: '2', nombre: 'chanchan', descripcion: 'chanchan descripcion' },
      ],*/
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
