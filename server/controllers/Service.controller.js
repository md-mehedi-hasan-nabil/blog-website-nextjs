const mongoose = require("mongoose");
const ServicesModel = require("../models/Service.model");

// gey all services
async function getServices(req, res, next) {
  try {
    const services = await ServicesModel.find({});
    res.status(200).json({
      services,
    });
  } catch (error) {
    next(error);
  }
}

// get service by id
async function getServiceById(req, res, next) {
  try {
    const id = req.params["id"];
    const service = await ServicesModel.find({
      _id: new mongoose.Types.ObjectId(id),
    });

    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
}

// add service

async function addService(req, res, next) {
  try {
    const serviceInfo = new ServicesModel(req.body);
    const service = await serviceInfo.save();

    res.status(201).json({
      service,
      message: "Service add successfull",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getServices,
  getServiceById,
  addService,
};
