const mongoose = require("../db/connection")

const truckSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  msrp: Number,
  img: String,
})

const Truck = mongoose.model("Truck", truckSchema)

module.exports = Truck
