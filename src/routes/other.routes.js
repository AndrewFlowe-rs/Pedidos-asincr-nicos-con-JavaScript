const express = require('express');
const router = express.Router();
const indexController = require('../controllers/vistas/otherController');
const movieApi = require('../controllers/api/moviesAPIController');
router.get('/', indexController.home);

module.exports = router