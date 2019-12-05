const express = require('express');
const router  = express.Router();
const Movie   = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(movies => {
    console.log(movies);
    res.render('movies', {movies: movies});
  })
})

router.get('/movie/:id', (req, res,next)=> {
  Movie.findById(req.params.id).then(movie => {
    res.render('movie', {movie: movie});
  });
});

module.exports = router;
