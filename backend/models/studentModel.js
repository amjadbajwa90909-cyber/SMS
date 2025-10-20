import db from "../config/db.js";

export const getAllStudents = (search, callback) => {
  let query = "SELECT * FROM students";
  if (search) {
    query += ` WHERE name LIKE ? OR father_name LIKE ? OR class LIKE ? OR result LIKE ?`;
    const s = `%${search}%`;
    db.query(query, [s, s, s, s], callback);
  } else {
    db.query(query, callback);
  }
};

export const addStudent = (student, callback) => {
  const { name, father_name, roll, class: className, marks, result } = student;
  db.query(
    "INSERT INTO students (name, father_name, roll, class, marks, result) VALUES (?, ?, ?, ?, ?, ?)",
    [name, father_name, roll, className, marks, result],
    callback
  );
};

export const updateStudent = (id, student, callback) => {
  const { name, father_name, roll, class: className, marks, result } = student;
  db.query(
    "UPDATE students SET name=?, father_name=?, roll=?, class=?, marks=?, result=? WHERE id=?",
    [name, father_name, roll, className, marks, result, id],
    callback
  );
};

export const deleteStudent = (id, callback) => {
  db.query("DELETE FROM students WHERE id=?", [id], callback);
};

export const getStats = (callback) => {
  db.query(
    "SELECT COUNT(*) AS total, SUM(result='Pass') AS passed, SUM(result='Fail') AS failed FROM students",
    callback
  );
};
