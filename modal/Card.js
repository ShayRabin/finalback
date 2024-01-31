// models/Card.js
const mongoose = require("mongoose");

// Define the Card schema
const cardSchema = new mongoose.Schema({
  photo: String,
  productType: String,
  header: String,
  description: String,
  salePrice: Number,
  price: Number,
});

// Create and export the Card model
const Card = mongoose.model("card", cardSchema);
module.exports = Card;
