const { auth } = require("../models");
const { error } = require("../services/logger");

const endpoint = {};

endpoint.login = (req, res, mongoDB) => {
  return mongoDB
    .collection(auth)
    .find({ login: req.body.j_username })
    .toArray((err, result) => {
      if (err) error(err);
      if (result[0].password !== req.body.j_password) {
        res.status(401).send("Unauthorised");
      }
      res.json(result[0]);
    });
}

module.exports = endpoint;
