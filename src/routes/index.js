const express = require('express');
const routerActor = require('./actor.route');
const routerDirector = require('./director.route');
const routerGenre = require('./genre.route');
const routerMovie = require('./movie.route');
const router = express.Router();

// colocar las rutas aquí
router.use('/actor', routerActor)
router.use('/director', routerDirector)
router.use('/genre', routerGenre)
router.use('/movie', routerMovie)

module.exports = router;