const express = require("express");
const router = express.Router();
const DOC = require("../models/doctorModel");


router.get("/doctors", async (req, res) => {
  const usersData = await DOC.find();
  res.json(usersData);
});



router.post("/addDoctor", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const userData = new DOC({
      name: req.body.name,
      phone: req.body.phone,
      // mail: req.body.mail,
      speciallization: req.body.speciallization,
      education: req.body.education,
      fee: req.body.fee,
      email: req.body.mail, // Make sure to include the email field
    });
    const result = await userData.save();
    res.json(result);
  } catch (error) {
    console.log("error : ", error);
    res.json({ error: "something went wrong!" });
  }
});
module.exports = router;

// JWT ----> Advanced form ----> JWE
