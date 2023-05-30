const { Schema, default: mongoose } = require("mongoose");

const servicesSchema = new Schema({
  title: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  active: Boolean,
});

const ServicesModel = mongoose.model("service", servicesSchema);

module.exports =  ServicesModel
