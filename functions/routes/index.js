const express = require("express");
const UserController = require("../controllers/UserController");
const CourseController = require("../controllers/CourseController");
const StudentController = require("../controllers/StudentController");

// eslint-disable-next-line new-cap
const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/courses", CourseController.getCourses);
router.get("/students", StudentController.getStudents);

module.exports = router;
