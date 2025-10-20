document.getElementById("addStudentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target).entries());

  const response = await fetch("http://localhost:3000/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Student added successfully!");
    e.target.reset();
  } else {
    alert("Error adding student.");
  }
});
