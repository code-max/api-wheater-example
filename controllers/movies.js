let mongoose = require("mongoose");
let Movies = mongoose.model("Movies");

//GET - Return all movies in the DB
exports.findAllMovies = function (req, res) {
  Movies.find(function (err, movies) {
    if (err) res.send(500, err.message);

    console.log("GET /movies");
    res.status(200).jsonp(movies);
  });
};

//GET - Return a Movie with specified ID
exports.findById = function (req, res) {
  Movies.findById(req.params.id, function (err, movies) {
    if (err) return res.send(500, err.message);

    console.log("GET /movies/" + req.params.id);
    res.status(200).jsonp(movies);
  });
};

//POST - Insert a new Movie in the DB
exports.addMovie = function (req, res) {
  console.log("POST");
  console.log(req.body);

  let movie = new Movies({
    title: req.body.title,
    year: req.body.year,
    country: req.body.country,
    poster: req.body.poster,
    genre: req.body.genre,
    summary: req.body.summary,
  });

  movie.save(function (err, movie) {
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(movie);
  });
};

//PUT - Update a register movie already exists
exports.updateMovie = function (req, res) {
  Movies.findById(req.params.id, function (err, movie) {
    movie.title = req.body.title;
    movie.year = req.body.year;
    movie.country = req.body.country;
    movie.poster = req.body.poster;
    movie.genre = req.body.genre;
    movie.summary = req.body.summary;

    movie.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).jsonp(movie);
    });
  });
};
