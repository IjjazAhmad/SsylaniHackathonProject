const mongoose = require("mongoose");

const DocSchema = new mongoose.Schema(
  {
    email: { type: String,unique: true, sparse: true ,  required: true },
    name: { type: String,required: true },
    phone: { type: String, required: true },
    speciallization: { type: String, required: true },
    education: { type: String, required: true },
    fee: { type: String, required: true },
    
  },

  { collection: "doctor-info", versionKey: false }
);

const DOC = mongoose.model("doctor-info", DocSchema);

module.exports = DOC;
