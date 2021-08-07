const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const Product = require("./models/Product");

const DB = "mongodb+srv://envincebal:.357magnum@cluster0.fzrfq.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect(DB, {
  // mongoose.connect("mongodb://localhost:27017/myFlixDB", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());

app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.get("/products", (req, res, next) => {
  Product.find()
  .then(products => {
    res.status(201).json(products);
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Listening on port 8000");
});