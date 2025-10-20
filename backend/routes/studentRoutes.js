import express from "express";
import {
  getStudents,
  createStudent,
  editStudent,
  removeStudent,
  getStudentStats,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.put("/:id", editStudent);
router.delete("/:id", removeStudent);
router.get("/stats", getStudentStats);

export default router;
