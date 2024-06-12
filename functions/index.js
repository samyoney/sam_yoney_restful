const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

/**
 * Validates the username and password.
 * @param {string} username - The username to validate.
 * @param {string} password - The password to validate.
 * @return {boolean} True if the username and password are valid.
 */
function validateUsernameAndPassword(username, password) {
  const userValid = typeof username === "string" && username.trim().length >= 3;
  const passValid = typeof password === "string" && password.trim().length >= 6;
  return userValid && passValid;
}

/**
 * Validates additional fields.
 * @param {string} courseId - The course ID to validate.
 * @param {string} name - The name to validate.
 * @param {string} birth - The birth to validate.
 * @return {boolean} True if the additional fields are valid.
 */
function validateAdditionalFields(courseId, name, birth) {
  const courseIdValid = true;
  const nameValid = typeof name === "string" && name.trim().length > 0;
  const birthValid = typeof birth === "string" && birth.trim().length > 0;
  return courseIdValid && nameValid && birthValid;
}

const courseData = {
  status: 0,
  message: "Courses retrieved successfully",
  courses: [
    {
      id: "1",
      name: "Introduction to Programming",
      instructor: "John Doe",
      topics: ["Variables", "Control Structures", "Functions"],
    },
    {
      id: "2",
      name: "Advanced Mathematics",
      instructor: "Jane Smith",
      topics: ["Calculus", "Linear Algebra", "Differential Equations"],
    },
  ],
};

const studentData = {
  status: 0,
  message: "Students retrieved successfully",
  students: [
    {
      id: "1",
      name: "Alice Johnson",
      birth: "2000-01-01",
    },
    {
      id: "2",
      name: "Bob Smith",
      birth: "1999-05-15",
    },
  ],
};

app.post("/register", (req, res) => {
  const {username, password, courseId, name, birth} = req.body;
  if (
    !validateUsernameAndPassword(username, password) ||
      !validateAdditionalFields(courseId, name, birth)
  ) {
    return res.status(401).send({
      status: 1,
      message: "Invalid input value",
    });
  } else {
    return res.status(200).send({
      status: 0,
      message: "Register successful",
    });
  }
});

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  if (!validateUsernameAndPassword(username, password)) {
    return res.status(401).send({
      status: 1,
      message: "Invalid credentials",
    });
  } else {
    return res.status(200).send({
      status: 0,
      message: "Login successful",
    });
  }
});

app.get("/courses", (req, res) => {
  res.status(200).json(courseData);
});

app.get("/students", (req, res) => {
  res.status(200).json(studentData);
});

exports.api = functions.https.onRequest(app);
