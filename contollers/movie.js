const express = require('express');
var Movie = require('../models/movie');

exports.getMovies = (req, res) => {
    const movies = [];
    Movie.find()
      .then(movies => res.json({ movies }))
      .catch(err => res.json(err));
  };

module.exports = exports;
