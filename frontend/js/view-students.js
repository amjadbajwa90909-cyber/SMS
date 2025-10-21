// Fetch and display students
async function loadStudents(query = "") {
  try {
    const res = await fetch(`http://localhost:3000/api/students?search=${query}`);
    const students = await res.json();

    const tbody = document.querySelector("#studentsTable tbody");
    tbody.innerHTML = "";

    students.forEach((s) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${s.roll_number}</td>
        <td>${s.name}</td>
        <td>${s.father_name}</td>
        <td>${s.class}</td>
        <td>${s.marks}</td>
        <td>${s.result}</td>
        <td>
          <button onclick="editStudent(${s.id})">✏️EDIT</button>
          <button onclick="deleteStudent(${s.id})">❌DELETE</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Error loading students:", error);
  }
}

// Search students
document.getElementById("searchBox").addEventListener("input", (e) => {
  loadStudents(e.target.value);
});

// Edit student (redirect to Add Student page prefilled)
function editStudent(id) {
  window.location.href = `./add-student.html?id=${id}`;
}

// Delete student
async function deleteStudent(id) {
  if (!confirm("Are you sure you want to delete this student?")) return;

  try {
    const res = await fetch(`http://localhost:3000/api/students/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Student deleted successfully!");
      loadStudents();
    } else {
      alert("Error deleting student.");
    }
  } catch (error) {
    console.error("Error deleting:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => loadStudents());
