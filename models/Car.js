const mongoose = require("../db/connection")

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  msrp: Number,
  img: String,
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car
