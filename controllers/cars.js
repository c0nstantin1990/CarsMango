const express = require("express");
const Car = require("../models/Car");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    res.json(await Car.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(await Car.find(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    res.json(await Car.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await Car.findOneAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    res.json(await Car.findOneAndUpdate(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
