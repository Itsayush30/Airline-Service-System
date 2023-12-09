const express = require("express");

const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

// /api/v1/airports/:Id GET
router.get("/:id", AirportController.getAirport);

// /api/v1/airports/ GET
router.get("/", AirportController.getAirports);

// /api/v1/airports/:id DELETE
router.delete("/:id", AirportController.destroyAirport);

// /api/v1/airports/:id UPDATE
router.patch("/:id", AirportController.updateAirport);

module.exports = router;
