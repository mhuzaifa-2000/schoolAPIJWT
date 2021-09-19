const router = require("express").Router();
const jwt = require("jsonwebtoken");
const verify = require("../Middlewares/verify");
const School = require("../models/school.model");
const {
  validateNewSchool,
  validateUpdateSchool,
  validateDeleteSchool,
} = require("../Middlewares/school.validate");
const {
  findById,
  addNewSchool,
  updateSchool,
  deleteSchool,
} = require("../Controllers/school.controller");

router.get("/:id", findById);
router.post("/", validateNewSchool, addNewSchool);
router.put("/", verify, validateUpdateSchool, updateSchool);
router.delete("/", validateDeleteSchool, deleteSchool);

module.exports = router;
