const mongoose = require("mongoose");

const appoinmentSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    time: { type: String, required: true },
  drId: { type: String, required: true },
  },

  { collection: "appointment", versionKey: false }
);

const Appoint = mongoose.model("appointment", appoinmentSchema);

module.exports = Appoint;
