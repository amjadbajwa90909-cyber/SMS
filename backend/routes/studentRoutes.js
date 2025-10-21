import express from "express";
import {
  getStudents,
  createStudent,
  editStudent,
  removeStudent,
  getStudentStats,
  getStudentById,
} from "../controllers/studentController.js";

const router = express.Router();

// ⚠️ Important: Place specific routes before parameterized ones
router.get("/stats", getStudentStats);
router.get("/:id", getStudentById);
router.get("/", getStudents);
router.post("/", createStudent);
router.put("/:id", editStudent);
router.delete("/:id", removeStudent);

export default router;
