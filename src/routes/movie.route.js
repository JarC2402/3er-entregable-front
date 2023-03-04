const { getAll, create, getOne, remove, update, setMoviesActors, setMoviesDirectors, setMoviesGenres } = require('../controllers/movies.controllers');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(getAll)
    .post(create);

routerMovie.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routerMovie.route('/:id/actors')
    .post(setMoviesActors)

routerMovie.route('/:id/directors')
    .post(setMoviesDirectors)

routerMovie.route('/:id/genres')
    .post(setMoviesGenres)
module.exports = routerMovie;