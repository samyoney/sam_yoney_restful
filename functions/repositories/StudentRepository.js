const StudentModel = require("../models/StudentModel");

const students = [
  new StudentModel("1", "Alice Johnson", "2000-01-01"),
  new StudentModel("2", "Bob Smith", "1999-05-15"),
];

class StudentRepository {
  static getAllStudents() {
    return students;
  }
}

module.exports = StudentRepository;
