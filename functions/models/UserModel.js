class UserModel {
  constructor(username, password, courseId, name, birth) {
    this.username = username;
    this.password = password;
    this.courseId = courseId;
    this.name = name;
    this.birth = birth;
  }
}

module.exports = UserModel;
