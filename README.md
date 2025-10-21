<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>School Management System - README</title>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9fafc;
      color: #222;
      line-height: 1.6;
      margin: 2rem auto;
      max-width: 900px;
      padding: 2rem;
    }
    h1, h2, h3 {
      color: #1e40af;
    }
    code, pre {
      background: #f3f4f6;
      border-radius: 5px;
      padding: 0.5rem;
      font-family: "Courier New", monospace;
    }
    pre {
      overflow-x: auto;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 0.5rem;
      text-align: left;
    }
    th {
      background-color: #e0e7ff;
    }
    a {
      color: #2563eb;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    footer {
      text-align: center;
      margin-top: 3rem;
      color: #555;
    }
  </style>
</head>
<body>
  <h1>🏫 School Management System (SMS)</h1>

  <p>
    A simple full-stack <strong>School Management System</strong> built using
    <strong>Node.js, Express, MySQL, and Vanilla JavaScript (HTML, CSS, JS)</strong>.
    It allows teachers to <strong>add, view, edit, and delete student records</strong>,
    and see overall performance stats.
  </p>

  <h2>🚀 Features</h2>
  <ul>
    <li>➕ Add new students</li>
    <li>📋 View all students in a searchable table</li>
    <li>✏️ Edit existing student records</li>
    <li>❌ Delete students</li>
    <li>📊 Dashboard shows total, passed, and failed counts</li>
    <li>⚙️ RESTful backend with Express and MySQL</li>
    <li>🎨 Responsive and clean frontend</li>
  </ul>

  <h2>🧩 Folder Structure</h2>
  <pre><code>SMS/
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
</code></pre>

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
      <tr><td>GET</td><td>/api/students</td><td>Get all students (with optional <code>?search=</code>)</td></tr>
      <tr><td>POST</td><td>/api/students</td><td>Add a new student</td></tr>
      <tr><td>PUT</td><td>/api/students/:id</td><td>Update student by ID</td></tr>
      <tr><td>DELETE</td><td>/api/students/:id</td><td>Delete student by ID</td></tr>
      <tr><td>GET</td><td>/api/students/stats</td><td>Get total, passed, and failed counts</td></tr>
    </tbody>
  </table>

  <h2>🖥️ Frontend Pages</h2>
  <table>
    <thead>
      <tr>
        <th>Page</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>index.html</td><td>Dashboard showing student stats</td></tr>
      <tr><td>add-student.html</td><td>Add or edit student record</td></tr>
      <tr><td>view-students.html</td><td>View, search, edit, or delete students</td></tr>
    </tbody>
  </table>

  <h2>👨‍💻 Developer</h2>
  <p><strong>Amjad Alam Bajwa</strong><br>
  📧 your-email@example.com<br>
  🌐 <a href="https://github.com/amjadbajwa90909-cyber" target="_blank">GitHub: amjadbajwa90909-cyber</a></p>

  <h2>🪪 License</h2>
  <p>This project is open source and available under the <strong>MIT License</strong>.</p>

  <h2>❤️ Acknowledgments</h2>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://www.npmjs.com/package/mysql2">MySQL2</a></li>
    <li><a href="https://www.npmjs.com/package/dotenv">Dotenv</a></li>
  </ul>

  <footer>© 2025 School Management System | Developed by Amjad Alam Bajwa</footer>
</body>
</html>
