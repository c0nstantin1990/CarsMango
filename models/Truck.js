const mongoose = require("../db/connection");

const truckSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  msrp: Number,
  img: String,
});

truckSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;
