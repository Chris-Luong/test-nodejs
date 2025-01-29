const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Welcome to /chungus route.</h1>");
});

router.get("/103", (req, res) => {
  res.send("<h1>You have reached chungus 105.</h1>");
});

router.get("/104", (req, res) => {
  res.send("<h1>You've reached chungus 104.</h1>");
});

module.exports = router;
