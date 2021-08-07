const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Name:{
    type: String,
    required: true
  },
  Price:{
    type: Number,
    required: true
  },
  Category:{
    type: String,
    required: true
  },
  Image:{
    type: String,
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;