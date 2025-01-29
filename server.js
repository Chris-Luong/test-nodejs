// Tutorial:
// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});

const examplesRoute = require("./routes/examples");
const chungusRoute = require("./routes/chungus");

app.use("/examples", examplesRoute);
app.use("/chungus", chungusRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
