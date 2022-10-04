const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

//use the body
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log("error in starting server");
    return;
  }
  console.log("listening to the port ", port);
});
