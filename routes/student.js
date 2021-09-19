const mongoose = require("mongoose");
const router = require("express").Router();
const Student = require("../models/student.model");
const verify = require("../Middlewares/verify");

const {
  validateStudent,
  validateFindByRollAndName,
  validateDeleteStudent,
} = require("../Middlewares/student.validate");
const {
  getAllStudents,
  addNewStudent,
  findByRollNoAndName,
  deleteStudent,
} = require("../Controllers/student.controller");

router.post("/", verify, validateStudent, addNewStudent);
router.get("/", verify, getAllStudents);
router.get("/find", verify, validateFindByRollAndName, findByRollNoAndName);
router.delete("/", verify, validateDeleteStudent, deleteStudent);

module.exports = router;
