var express = require('express');
var router = express.Router();

const { category, landingPage } = require('./controller');

router.get('/category', category);
router.get('/barang', landingPage);

module.exports = router;
