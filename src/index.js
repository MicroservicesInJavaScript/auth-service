const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const middleware = require("./middleware");
const auth = require("./controllers/auth");
const { error } = require("./services/logger");
const { MONGO_URL, PORT } = process.env;

const app = express();
app.use(middleware);

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

// Api Docs endpoint
app.use("/docs", express.static(path.join(__dirname, "api-docs")));

// Health check endpoint
app.get("/status", (req, res) => res.status(200).send("OK"));

MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) error(err);

  // Auth APIs
  app.post("/authentication", (req, res) => {
    return auth.login(req, res, db);
  });

  // Listen on app port
  app.listen(PORT, () =>
    console.log(`Auth API app listening on port ${PORT}!`)
  );
});
