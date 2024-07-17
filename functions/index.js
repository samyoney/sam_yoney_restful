const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();

const CourseController = require("./controllers/CourseController");
const UserController = require("./controllers/UserController");
const StudentController = require("./controllers/StudentController");

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.post("/register", UserController.register);
app.post("/login", UserController.login);
app.get("/courses", CourseController.getCourses);
app.get("/students", StudentController.getStudents);

exports.api = functions.https.onRequest(app);
