// Fetch and display students
async function loadStudents(query = "") {
  console.log("🟦 Sending search query to backend:", query); // 👈 NEW
  try {
    const res = await fetch(`http://localhost:3000/api/students?search=${encodeURIComponent(query)}`);
    console.log("🟩 Fetch URL:", res.url); // 👈 NEW
    const students = await res.json();
    console.log("🟢 Backend returned:", students); // 👈 NEW

    const tbody = document.querySelector("#studentsTable tbody");
    tbody.innerHTML = "";

    if (!students || students.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7">No students found</td></tr>`;
      return;
    }

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
          <button onclick="editStudent(${s.id})">✏️ EDIT</button>
          <button onclick="deleteStudent(${s.id})">❌ DELETE</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("❌ Error loading students:", error);
  }
}

// Search students (live typing)
document.getElementById("searchBox").addEventListener("input", (e) => {
  const query = e.target.value.trim();
  console.log("⌨️ User typed:", query); // 👈 NEW
  loadStudents(query);
});

// Also make the “Search” button work
function onSearchClick() {
  const query = document.getElementById("searchBox").value.trim();
  console.log("🔍 Search button clicked, query:", query); // 👈 NEW
  loadStudents(query);
}

// Edit student
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