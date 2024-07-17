const admin = require("firebase-admin");
const db = admin.firestore();
db.settings({ignoreUndefinedProperties: true});

class UserRepository {
  static async createUser(user) {
    const userRef = db.collection("users").doc(user.username);
    await userRef.set(user);
  }

  static async getUserByUsername(username) {
    const userRef = db.collection("users").doc(username);
    const doc = await userRef.get();
    return doc.exists ? doc.data() : null;
  }
}

module.exports = UserRepository;
