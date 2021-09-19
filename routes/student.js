const mongoose = require("mongoose");
const router = require("express").Router();
const Student = require("../models/student.model");

// router.get("/", (req, res) => {
//   res.send("Student");
// });

router.post("/", (req, res) => {
  const newSchool = new Student({
    name: req.body.name,
    class: req.body.class,
    fatherName: req.body.fatherName,
    address: req.body.address,
    contactNo: req.body.contactNo,
    medicalCondition: req.body.medicalCondition,
    school: req.body.school,
  });
  newSchool
    .save()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
});
router.get("/", (req, res) => {
  Student.findAll()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
});
router.get("/student", (req, res) => {
  const { name } = req.body;
  console.log(name);
});
module.exports = router;
