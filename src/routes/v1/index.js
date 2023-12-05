const express = require("express");

const { InfoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes")

const router = express.Router();

router.get("/info", InfoController.info);
router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);


module.exports = router;
