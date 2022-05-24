var express = require('express');
var router = express.Router();

const { category, landingPage, location } = require('./controller');

router.get('/category', category);
router.get('/barang', landingPage);
router.get('/location', location);

module.exports = router;
