const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Example Route
let router = express.Router();
router.get("/", function (req, res) {
  res.send("API Example Route");
});

app.use(router);

// Start server
app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});

// Connection to MongoDB localhost
// mongoose.connect(process.env.MONGO_DB, function (err, res) {
//   if (err) throw err;
//   console.log("Connected to Database");
// });

// Connection to MongoDB Atlas cluster
try {
  mongoose.connect(
    process.env.MONGO_DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}
