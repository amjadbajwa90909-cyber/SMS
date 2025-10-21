import pool from "../config/db.js";
// ✅ Get all students (with proper case-insensitive search)
export const getAllStudents = (search, callback) => {
  let query = "SELECT * FROM students";
  const params = [];

  if (search && search.trim() !== "") {
    query +=
      " WHERE LOWER(name) LIKE ? " +
      "OR LOWER(father_name) LIKE ? " +
      "OR LOWER(roll_number) LIKE ? " +
      "OR LOWER(class) LIKE ? " +
      "OR LOWER(result) LIKE ?";
    const likeSearch = `%${search.toLowerCase()}%`;
    params.push(likeSearch, likeSearch, likeSearch, likeSearch, likeSearch);
  }

  console.log("🟡 SQL Query:", query, "Params:", params);

  pool.query(query, params, (err, results) => {
    if (err) {
      console.error("❌ SQL Error:", err);
      return callback(err);
    }
    console.log("🟢 SQL Results:", results);
    callback(null, results);
  });
};

// ✅ Add new student
export const addStudent = (student, callback) => {
  const { name, father_name, roll_number, class: className, marks, result } = student;
  pool.query(
    "INSERT INTO students (name, father_name, roll_number, class, marks, result) VALUES (?, ?, ?, ?, ?, ?)",
    [name, father_name, roll_number, className, marks, result],
    callback
  );
};

// ✅ Update student
export const updateStudent = (id, student, callback) => {
  const { name, father_name, roll_number, class: className, marks, result } = student;
  pool.query(
    "UPDATE students SET name=?, father_name=?, roll_number=?, class=?, marks=?, result=? WHERE id=?",
    [name, father_name, roll_number, className, marks, result, id],
    callback
  );
};

// ✅ Delete student
export const deleteStudent = (id, callback) => {
  pool.query("DELETE FROM students WHERE id=?", [id], callback);
};

// ✅ Get stats
export const getStats = (callback) => {
  pool.query(
    "SELECT COUNT(*) AS total, SUM(result='Pass') AS passed, SUM(result='Fail') AS failed FROM students",
    callback
  );
};