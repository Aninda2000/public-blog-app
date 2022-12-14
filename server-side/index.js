const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const passport = require("passport");
const passportJwt = require("./config/passport-jwt-stregedy");

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));


app.use(passport.initialize());
app.use(passport.session());

app.listen(port, function (err) {
  if (err) {
    console.log("error in starting server");
    return;
  }
  console.log("listening to the port ", port);
});
