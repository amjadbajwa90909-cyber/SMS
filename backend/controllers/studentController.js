import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  getStats,
} from "../models/studentModel.js";
import pool from "../config/db.js";

export const getStudents = (req, res) => {
  const search = req.query.search || "";
  console.log("🔍 Search received:", search); // 👈 ADD THIS LINE
  getAllStudents(search, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};


export const createStudent = (req, res) => {
  addStudent(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Student added successfully" });
  });
};

export const editStudent = (req, res) => {
  updateStudent(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Student updated successfully" });
  });
};

export const removeStudent = (req, res) => {
  deleteStudent(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Student deleted successfully" });
  });
};

export const getStudentStats = (req, res) => {
  getStats((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

// ✅ Get a single student by ID (used for Edit)
export const getStudentById = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Student not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching student" });
  }
};
