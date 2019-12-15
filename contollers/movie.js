const express = require('express');
var Movie = require('../models/movie');

/* const ring = new Movie({ title: 'DUPA333' });
ring.save(); */

exports.getMovies = (req, res) => {
  const movies = [];
  Movie.find()
    .then(movies => res.json({ movies }))
    .catch(err => res.json(err));
};

exports.postMovie = (req, res) => {
  Movie.create(req.body)
    .then(saved => res.json(saved))
    .catch(err => res.json(err));
};

exports.getMovie = (req, res) => {
    Movie.findById(req.params.id)
    .then(found => res.json(found))
    .catch(err => res.json(err));
}

exports.putMovie = (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then(found => res.json(found))
    .catch(err => res.json(err));
}
module.exports = exports;
