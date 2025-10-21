**🏫 School Management System (SMS)**
A simple full-stack School Management System built using
Node.js, Express, MySQL, and Vanilla JavaScript (HTML, CSS, JS).
It allows teachers to add, view, edit, and delete student records, and see overall performance stats.

**🚀 Features**
➕ Add new students
📋 View all students in a searchable table
✏️ Edit existing student records
❌ Delete students
📊 Dashboard shows total, passed, and failed counts
⚙️ RESTful backend with Express and MySQL
🎨 Responsive and clean frontend

**🧩 Folder Structure**
SMS/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── models/
│   │   └── studentModel.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── add-student.js
│   │   └── view-students.js
│   ├── index.html
│   ├── add-student.html
│   └── view-students.html
│
└── README.md

**
🧠 API Endpoints
**
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>🧠 Students API Endpoints</title>

<style>
  :root {
    --bg: #0f172a;
    --text: #f1f5f9;
    --muted: #94a3b8;
    --accent: #3b82f6;
    --border: rgba(255, 255, 255, 0.08);
    --radius: 12px;
  }

  body {
    font-family: "Inter", system-ui, sans-serif;
    background: linear-gradient(180deg, #0a0f1f, #0f172a);
    color: var(--text);
    margin: 0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
  }

  .table-container {
    width: 100%;
    max-width: 900px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    backdrop-filter: blur(6px);
  }

  h2 {
    margin: 0;
    padding: 1.2rem 1.5rem;
    background: linear-gradient(90deg, var(--accent), #60a5fa);
    color: white;
    font-size: 1.2rem;
    letter-spacing: 0.5px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background: rgba(255, 255, 255, 0.05);
  }

  th, td {
    padding: 1rem;
    text-align: left;
    font-size: 0.95rem;
    border-bottom: 1px solid var(--border);
  }

  th {
    text-transform: uppercase;
    font-weight: 600;
    color: var(--muted);
    letter-spacing: 0.04em;
  }

  tr:hover {
    background: rgba(59, 130, 246, 0.1);
    transition: 0.2s ease;
  }

  /* Method tags */
  .method {
    font-weight: 700;
    padding: 0.4em 0.7em;
    border-radius: 8px;
    font-size: 0.85rem;
    letter-spacing: 0.02em;
    display: inline-block;
  }

  .GET { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59,130,246,0.4); }
  .POST { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.4); }
  .PUT { background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234,179,8,0.4); }
  .DELETE { background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.4); }

  /* Responsive */
  @media (max-width: 700px) {
    table, thead, tbody, th, td, tr { display: block; width: 100%; }
    thead { display: none; }
    tr {
      margin: 0.7rem 0;
      background: rgba(255, 255, 255, 0.02);
      border-radius: var(--radius);
      padding: 1rem;
      border: 1px solid var(--border);
    }
    td {
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
    }
    td::before {
      content: attr(data-label);
      font-weight: 600;
      color: var(--muted);
    }
  }
</style>
</head>

<body>
  <div class="table-container">
    <h2>🧠 API Endpoints</h2>
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Endpoint</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Method"><span class="method GET">GET</span></td>
          <td data-label="Endpoint"><code>/api/students</code></td>
          <td data-label="Description">Get all students (with optional <code>?search=</code>)</td>
        </tr>
        <tr>
          <td data-label="Method"><span class="method POST">POST</span></td>
          <td data-label="Endpoint"><code>/api/students</code></td>
          <td data-label="Description">Add a new student</td>
        </tr>
        <tr>
          <td data-label="Method"><span class="method PUT">PUT</span></td>
          <td data-label="Endpoint"><code>/api/students/:id</code></td>
          <td data-label="Description">Update student by ID</td>
        </tr>
        <tr>
          <td data-label="Method"><span class="method DELETE">DELETE</span></td>
          <td data-label="Endpoint"><code>/api/students/:id</code></td>
          <td data-label="Description">Delete student by ID</td>
        </tr>
        <tr>
          <td data-label="Method"><span class="method GET">GET</span></td>
          <td data-label="Endpoint"><code>/api/students/stats</code></td>
          <td data-label="Description">Get total, passed, and failed counts</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>


<div class="table-container">
  <h2>🖥️ Frontend Pages</h2>
  <table>
    <thead>
      <tr>
        <th>Page</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Page"><code>index.html</code></td>
        <td data-label="Description">Dashboard showing student stats</td>
      </tr>
      <tr>
        <td data-label="Page"><code>add-student.html</code></td>
        <td data-label="Description">Add or edit student record</td>
      </tr>
      <tr>
        <td data-label="Page"><code>view-students.html</code></td>
        <td data-label="Description">View, search, edit, or delete students</td>
      </tr>
    </tbody>
  </table>
</div>






