var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');
var movieContr = require("../contollers/movie")



router.get('/', movieContr.getMovies);
router.post('/', movieContr.postMovie);

module.exports = router;
