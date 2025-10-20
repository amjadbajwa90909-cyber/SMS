// Fetch student stats from backend and display on dashboard
async function loadDashboardData() {
  try {
    const res = await fetch("http://localhost:3000/api/students/stats");
    const data = await res.json();

    document.getElementById("totalStudents").textContent = data.total;
    document.getElementById("passedStudents").textContent = data.passed;
    document.getElementById("failedStudents").textContent = data.failed;
  } catch (error) {
    console.error("Error loading stats:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadDashboardData);
