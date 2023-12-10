const express = require("express");
const router = express.Router();
const Appoint = require("../models/appointmentModel");


router.get("/appoints", async (req, res) => {
  const usersData = await Appoint.find();
  res.json(usersData);
});



router.post("/addApoint", async (req, res) => {
  try {


    const userData = new Appoint({
     
      time: req.body.selectedTime,
      date: req.body.formattedDate,
      drId: req.body.drId,
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
