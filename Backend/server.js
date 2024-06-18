const express = require("express");
var mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const app = express();
require('dotenv').config();

// To manage and control web security 
app.use(cors());
// Processing json data from incoming http request 
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  return res.json({ message: " This is form backend" });
});

app.listen(2003, () => {
  console.log("Server Started... ");
});

// Connection to MySQL database 
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "job_portal",
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database...");
});

//============================================ Endpoint to handle user sign-up ============================================
app.post("/signup", async (req, res) => {
  const { userType, firstName, lastName, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO user_signin (User_Type, First_name, Last_name, Email, Password) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [userType, firstName, lastName, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting user into database:", err);
        return res.status(500).json({ success: false, message: "Database error" });
      }
      res.json({ success: true, message: "User registered successfully" });
      console.log(req.body);
    });
  } catch (error) {
    console.error("Error hashing password:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }

});

// ============================================ Endpoint for handling user login ============================================
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  // Query to get user with the provided email
  const query = "SELECT * FROM user_signin WHERE Email = ?";
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }

    // If user is found
    if (results.length > 0) {
      const user = results[0];

      // Compare the password with the hashed password
      const passwordMatch = await bcrypt.compare(password, user.Password);

      if (passwordMatch) {
        return res.status(200).json({ success: true, message: "Login successful" });
      } else {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }
    } else {
      // If user is not found
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  });
});
