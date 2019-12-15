var express = require('express');
var mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {type: String, default: "No title", required: true, trim: true}
})
 module.exports = mongoose.model("Movie", movieSchema);