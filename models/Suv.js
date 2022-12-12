const mongoose = require("../db/connection");

const suvSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  msrp: Number,
  img: String,
});

const Suv = mongoose.model("Suv", suvSchema);

module.exports = Suv;
