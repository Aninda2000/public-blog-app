const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect("mongodb://localhost/product_blog");

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
