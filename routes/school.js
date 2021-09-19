import express from "express";
import jwt from "jsonwebtoken";
import verify from "../Middlewares/verify";
import School from "../models/school.model";
const router = express.Router();
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
