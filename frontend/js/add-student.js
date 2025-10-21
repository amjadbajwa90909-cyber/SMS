// DEBUGGING add-student.js — paste this file and reload page
(function () {
  // Get student ID from URL (for edit mode)
  const params = new URLSearchParams(window.location.search);
  const studentId = params.get("id");
  console.log("DEBUG: studentId from URL:", studentId);

  const form = document.getElementById("addStudentForm");
  if (!form) {
    console.error("DEBUG: addStudentForm not found in DOM");
    return;
  }
  const submitBtn = form.querySelector("button[type='submit']") || form.querySelector("button");

  // helper to fill fields safely
  function fillForm(student) {
    console.log("DEBUG: filling form with student:", student);
    form.elements["name"].value = student.name ?? "";
    form.elements["father_name"].value = student.father_name ?? "";
    // form input name might be 'roll' or 'roll_number' — try both
    if (form.elements["roll"]) form.elements["roll"].value = student.roll_number ?? student.roll ?? "";
    if (form.elements["roll_number"]) form.elements["roll_number"].value = student.roll_number ?? student.roll ?? "";
    form.elements["class"].value = student.class ?? "";
    form.elements["marks"].value = student.marks ?? "";
    form.elements["result"].value = student.result ?? "";
  }

  // If editing, attempt to load existing data
  if (studentId) {
    if (submitBtn) submitBtn.textContent = "Update Student";

    // Try primary route GET /api/students/:id
    const primaryUrl = `http://localhost:3000/api/students/${studentId}`;
    console.log("DEBUG: trying primary fetch:", primaryUrl);

    fetch(primaryUrl)
      .then(async (res) => {
        console.log("DEBUG: primary fetch status:", res.status, res.statusText);
        const text = await res.text().catch(() => null);
        // try to parse JSON if any
        let parsed;
        try { parsed = text ? JSON.parse(text) : null; } catch(e) { parsed = null; }
        console.log("DEBUG: primary fetch raw response:", text, "parsed:", parsed);

        if (res.ok && parsed && (parsed.id || parsed.name)) {
          fillForm(parsed);
          return;
        }

        // If primary not found or returned non-student, try fallback search-based endpoint
        console.warn("DEBUG: primary route did not return expected student, trying fallback search");
        const fallbackUrl = `http://localhost:3000/api/students?search=${studentId}`;
        console.log("DEBUG: trying fallback fetch:", fallbackUrl);
        return fetch(fallbackUrl)
          .then(async (r2) => {
            console.log("DEBUG: fallback fetch status:", r2.status);
            const data = await r2.json().catch(() => null);
            console.log("DEBUG: fallback fetch body:", data);
            if (Array.isArray(data) && data.length > 0) {
              // look for exact id match or first element
              const byId = data.find((s) => String(s.id) === String(studentId));
              const studentObj = byId || data[0];
              fillForm(studentObj);
              return;
            } else {
              alert("Student not found (fallback). Check console for details.");
              console.error("DEBUG: fallback did not return data", data);
            }
          })
          .catch((err) => {
            console.error("DEBUG: fallback fetch error:", err);
            alert("Error fetching student (fallback). See console.");
          });
      })
      .catch((err) => {
        console.error("DEBUG: primary fetch error:", err);
        alert("Error fetching student (primary). See console.");
      });
  }

  // Handle form submit (Add or Update)
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    // normalize roll name
    if (formData.roll) { formData.roll_number = formData.roll; delete formData.roll; }

    const url = studentId
      ? `http://localhost:3000/api/students/${studentId}`
      : "http://localhost:3000/api/students";

    const method = studentId ? "PUT" : "POST";
    console.log("DEBUG: submitting to", url, "method", method, "payload", formData);

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("DEBUG: submit response status:", res.status);
      const body = await res.text().catch(() => null);
      console.log("DEBUG: submit response body:", body);
      if (res.ok) {
        alert(studentId ? "Student updated successfully!" : "Student added successfully!");
        window.location.href = "view-students.html";
      } else {
        alert("Error saving student. See console for response.");
      }
    } catch (err) {
      console.error("DEBUG: submit error:", err);
      alert("Network error while saving. See console.");
    }
  });
})();
