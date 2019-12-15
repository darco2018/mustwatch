var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');
var movieContr = require("../contollers/movie")

/* const ring = new Movie({ title: 'Ring' });
ring.save(); */

router.get('/', movieContr.getMovies);

module.exports = router;
