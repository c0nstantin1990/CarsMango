const mongoose = require("../db/connection");

const suvSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  msrp: Number,
  img: String,
});

suvSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Suv = mongoose.model("Suv", suvSchema);

module.exports = Suv;
