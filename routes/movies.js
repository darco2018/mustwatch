var express = require('express');
var router = express.Router();
var Movie = require('../model/movie');

/* const ring = new Movie({ title: 'Ring' });
ring.save(); */

router.get('/', function(req, res, next) {
  const movies = [];
  Movie.find()
    .then(movies => res.json({ movies }))
    .catch(err => res.json(err));
});

module.exports = router;
