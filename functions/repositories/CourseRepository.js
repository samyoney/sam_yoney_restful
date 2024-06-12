const CourseModel = require("../models/CourseModel");

const courses = [
  new CourseModel("1", "Introduction to Programming", "John Doe", ["Variables", "Control Structures", "Functions"]),
  new CourseModel("2", "Advanced Mathematics", "Jane Smith", ["Calculus", "Linear Algebra", "Differential Equations"]),
];

class CourseRepository {
  static getAllCourses() {
    return courses;
  }
}

module.exports = CourseRepository;
