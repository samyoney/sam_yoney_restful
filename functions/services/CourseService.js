const CourseRepository = require("../repositories/CourseRepository");

class CourseService {
  static getAllCourses() {
    return {
      status: 0,
      message: "Courses retrieved successfully",
      courses: CourseRepository.getAllCourses(),
    };
  }
}

module.exports = CourseService;
