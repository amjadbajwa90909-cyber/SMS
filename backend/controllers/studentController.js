import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  getStats,
} from "../models/studentModel.js";

export const getStudents = (req, res) => {
  const search = req.query.search || "";
  getAllStudents(search, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

export const createStudent = (req, res) => {
  addStudent(req.body, (err, result) => {
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
