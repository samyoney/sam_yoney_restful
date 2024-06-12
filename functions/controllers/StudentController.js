const StudentService = require("../services/StudentService");

class StudentController {
  static async getStudents(req, res) {
    try {
      const response = StudentService.getAllStudents();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({status: 1, message: "Server error"});
    }
  }
}

module.exports = StudentController;
