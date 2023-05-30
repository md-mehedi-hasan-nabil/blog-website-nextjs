const express = require("express");
const {
  getServices,
  getServiceById,
  addService,
} = require("../controllers/Service.controller");
const router = express.Router();

router.get("/", getServices);
router.get("/", getServiceById);
router.get("/", addService);


module.exports = router;
