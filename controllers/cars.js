const express = require("express");
const Car = require("../models/Car");

const router = express.Router();

// router.delete("/:id", (req, res) => {
//   Car.findOneAndRemove({ _id: req.params.id }).then((items) =>
//     res.redirect("/cars")
//   );
// });

// router.put("/:id", (req, res) => {
//   Car.findOneAndUpdate({ _id: req.params.id }, req.body).then(
//       (items) => res.redirect('/cars')
//   );
// });

// router.get('/edit/:id', (req, res) => {
//   Car.findById(req.params.id)
//   .then(items => {
//       res.render('car_edit', items)
//   })
// })
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
// router.get("/:id", async (req, res) => {
//   try {
//     res.json(await Car.findById(req.params.id));
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

router.get("/:id", (req, res) => {
  Car.findById(req.params.id, req.body);
});

module.exports = router;
