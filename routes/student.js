const { response } = require("express");
const mongoose = require("mongoose");
const router = require("express").Router();
const Student = require("../models/student.model");

router.get("/", (req, res) => {
  res.send("Student");
});

router.post("/create", (req, res) => {
  const newSchool = new School({
    name: req.body.name,
    class: req.body.class,
    fatherName: req.body.fatherName,
    address: req.body.address,
    contactNo: req.body.contactNo,
    medicalCondition: req.body.medicalCondition,
    school: req.body.schoolID,
  });
  newSchool
    .save()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
});
router.get("/students", (req, res) => {
  Student.findAll()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
