const CourseService = require("../services/CourseService");

class CourseController {
  static async getCourses(req, res) {
    try {
      const response = CourseService.getAllCourses();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({status: 1, message: "Server error"});
    }
  }
}

module.exports = CourseController;
