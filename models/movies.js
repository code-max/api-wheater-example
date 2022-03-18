exports = module.exports = function (app, mongoose) {
  let movieSchema = new mongoose.Schema({
    title: { type: String },
    year: { type: Number },
    country: { type: String },
    poster: { type: String },
    genre: {
      type: String,
      enum: [
        "Action",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Historical",
        "Horror",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "Western",
        "Others",
      ],
    },
    summary: { type: String },
  });

  mongoose.model("Movies", movieSchema);
};
