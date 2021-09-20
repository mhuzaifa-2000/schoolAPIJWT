import express from "express";
import jwt from "jsonwebtoken";
import verify from "../Middlewares/verify";
import School from "../models/school.model";
const router = express.Router();
import {
  validateNewSchool,
  validateUpdateSchool,
  validateDeleteSchool,
} from "../Middlewares/school.validate";
import {
  findById,
  addNewSchool,
  updateSchool,
  deleteSchool,
  getAllSchools,
} from "../Controllers/school.controller";

router.get("/", getAllSchools);
router.get("/:id", findById);
router.post("/", validateNewSchool, addNewSchool);
router.put("/:id", verify, validateUpdateSchool, updateSchool);
router.delete("/", validateDeleteSchool, deleteSchool);

module.exports = router;
