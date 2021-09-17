const router = require("express").Router();
const { response } = require("express");
const jwt = require("jsonwebtoken");
const verify = require("../verify");
const School = require("../models/school.model");

router.get("/find/:id", (req, res) => {
  const id = req.params.id;
  School.findOne({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
});
router.post("/create", (req, res) => {
  const schoolName = req.body.name;
  const address = req.body.address;
  const contactNo = req.body.contactNo;
  const medicalCondition = req.body.medicalCondition;

  const newSchool = new School({
    name: schoolName,
    address: address,
    contactNo: contactNo,
    medicalCondition: medicalCondition,
  });

  newSchool
    .save()
    .then((response) => {
      var token = jwt.sign({ _id: response._id }, process.env.SECRET_TOKEN);
      res.header("auth-token", token).send(token);
    })
    .catch((err) => res.status(400).json(err));
});

router.put("/update", verify, (req, res) => {
  const id = req.body.id;
  const schoolName = req.body.name;
  const address = req.body.address;
  const contactNo = req.body.contactNo;
  const medicalCondition = req.body.medicalCondition;

  School.updateOne(
    { _id: id },
    {
      $set: {
        name: schoolName,
        address: address,
        contactNo: contactNo,
        medicalCondition: medicalCondition,
      },
    }
  )
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.status(400).json(err));
});

router.delete("/delete", (req, res) => {
  const id = req.body.id;
  School.remove({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
