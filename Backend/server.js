import express from 'express';
import mysql from 'mysql2';
import path from 'path';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

// Convert __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// To manage and control web security
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["POST", "GET"],
  credentials: true
}));

// Processing json data from incoming http request
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  secret: 'secret', // a secret key used to encrypt the session cookie
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Ensure this is false if not using HTTPS
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    httpOnly: true // Helps to prevent cross-site scripting (XSS) attacks
  } // set the session cookie properties
}));

app.get("/api", (req, res) => {
  return res.json({ message: "This is from backend" });
});

app.listen(2003, () => {
  console.log("Server Started...");
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

app.get('/', (req, res) => {
  if (req.session.email) {
    return res.json({ valid: true, email: req.session.email });
  } else {
    return res.json({ valid: false });
  }
});

// Endpoint to handle user sign-up
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
    });
  } catch (error) {
    console.error("Error hashing password:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Endpoint for handling user login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  // Query to get user with the provided email
  const sql = "SELECT * FROM user_signin WHERE Email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Error executing sql:", err);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }

    // If user is found
    if (results.length > 0) {
      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.Password);

      if (passwordMatch) {
        req.session.email = user.Email; // Save the session
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
