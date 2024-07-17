class UserModel {
  constructor(username, password, courseId, name, birth) {
    this.username = username;
    this.password = password;
    this.courseId = courseId;
    this.name = name;
    this.birth = birth;
  }

  toPlainObject() {
    return {
      username: this.username,
      password: this.password,
      courseId: this.courseId,
      name: this.name,
      birth: this.birth
    };
  }
}

module.exports = UserModel;
