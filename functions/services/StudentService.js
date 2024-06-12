const StudentRepository = require("../repositories/StudentRepository");

class StudentService {
  static getAllStudents() {
    return {
      status: 0,
      message: "Students retrieved successfully",
      students: StudentRepository.getAllStudents(),
    };
  }
}

module.exports = StudentService;
