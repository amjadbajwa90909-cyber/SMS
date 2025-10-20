// server.js
// server.js
// server.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());
// ✅ MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Amjad@123", // your MySQL root password
  database: "school_db"
});


// ✅ Connect to database
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// ✅ Routes

// Get all students
app.get("/api/students", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Add new student
app.post("/api/students", (req, res) => {
 const { name, father_name, roll_number, class: className, marks, result } = req.body;
const sql = "INSERT INTO students (name, father_name, roll_number, class, marks, result) VALUES (?, ?, ?, ?, ?, ?)";
db.query(sql, [name, father_name, roll_number, className, marks, result], (err) => {
    if (err) {
      console.error("❌ Error adding student:", err.sqlMessage); // 👈 shows the actual MySQL error
      return res.status(500).json({ error: err.sqlMessage });
    }
    console.log("✅ Student added successfully:", name);
    res.json({ message: "Student added successfully" });
  });
});


// Delete student
app.delete("/api/students/:id", (req, res) => {
  db.query("DELETE FROM students WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Student deleted successfully" });
  });
});

// Update student
app.put("/api/students/:id", (req, res) => {
  const { name, father_name, roll_number, class: className, marks, result } = req.body;
  const sql = "UPDATE students SET name=?, father_name=?, roll_number=?, class=?, marks=?, result=? WHERE id=?";
  db.query(sql, [name, father_name, roll_number, className, marks, result, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Student updated successfully" });
  });
});

// Search students
app.get("/api/students/search", (req, res) => {
  const q = req.query.q;
  const sql = `
    SELECT * FROM students
    WHERE name LIKE ? OR father_name LIKE ? OR class LIKE ? OR result LIKE ?
  `;
  const params = [`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`];
  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// ✅ Start server
app.listen(3000, () => console.log("🚀 Server running on port 3000"));
