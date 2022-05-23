var express = require('express');
var router = express.Router();

const { category } = require('./controller');

router.get('/category', category);

module.exports = router;
