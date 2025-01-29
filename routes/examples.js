const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Welcome to /examples route.</h1>");
});

router.get("/101", (req, res) => {
  res.send("<h1>You have reached example 101.</h1>");
});

router.get("/102", (req, res) => {
  res.send("<h1>You've reached example 102.</h1>");
});

module.exports = router;
