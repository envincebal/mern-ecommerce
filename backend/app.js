const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.use(express.static("public"));

const port = process.env.PORT || 8000;
app.listen(port,  () => {
  console.log("Listening on port 8000");
});