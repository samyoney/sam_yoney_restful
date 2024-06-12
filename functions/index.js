const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();

const routes = require("./routes");
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.use("/api", routes);

exports.api = functions.https.onRequest(app);
