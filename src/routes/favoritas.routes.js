const express = require('express');
const router = express.Router();
const favController = require('../controllers/vistas/favController');

router.get('/favourites', favController.fav)

module.exports = router;