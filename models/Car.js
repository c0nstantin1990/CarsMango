const mongoose = require("../db/connection");

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  msrp: Number,
  img: String,
});

carSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
