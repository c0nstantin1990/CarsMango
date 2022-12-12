const express = require("express");

const cors = require("cors");
const morgan = require("morgan");
const carController = require("./controllers/cars");
const truckController = require("./controllers/trucks");
const suvController = require("./controllers/suvs");

const app = express();

app.use(express.static(__dirname + "/" + "public"));

app.use(express.json());
app.use(cors());
app.use(morgan());
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 4000);

app.use("/cars", carController);

app.use("/trucks", truckController);

app.use("/suvs", suvController);

// app.get("/showcase", async (req, res) => {
//   try {
//     const cars = await Car.find({});
//     const trucks = await Truck.find({});
//     const suvs = await Suv.find({});
//     return res.render("showcase", { cars: cars, trucks: trucks, suvs: suvs });
//   } catch (error) {
//     console.log(error);
//   }
// });
// app.get("/home", (req, res) => {
//   res.render("home");
// });
// app.post("/search", async (req, res) => {
//   try {
//     const cars = await Car.find({ make: req.body.make });
//     const trucks = await Truck.find({ make: req.body.make });
//     const suvs = await Suv.find({ make: req.body.make });
//     return res.render("showcase", { cars: cars, trucks: trucks, suvs: suvs });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")}`);
});
