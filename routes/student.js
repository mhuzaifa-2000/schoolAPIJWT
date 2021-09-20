import express from "express";
import verify from "../Middlewares/verify";
const router = express.Router();
import {
  validateStudent,
  validateFindByRollAndName,
  validateDeleteStudent,
} from "../Middlewares/student.validate";
import {
  getAllStudents,
  addNewStudent,
  findByRollNoAndName,
  deleteStudent,
} from "../Controllers/student.controller";

router.post("/", verify, validateStudent, addNewStudent);
router.get("/", verify, getAllStudents);
router.post("/find", verify, validateFindByRollAndName, findByRollNoAndName);
router.delete("/", verify, validateDeleteStudent, deleteStudent);

module.exports = router;
