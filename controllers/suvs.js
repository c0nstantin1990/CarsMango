const express = require("express");
const Suv = require("../models/Suv");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    res.json(await Suv.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(await Suv.find(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json(await Suv.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await Suv.findOneAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
