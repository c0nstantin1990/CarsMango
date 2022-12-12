const express = require("express");
const Truck = require("../models/Truck");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    res.json(await Truck.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(await Truck.find(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
