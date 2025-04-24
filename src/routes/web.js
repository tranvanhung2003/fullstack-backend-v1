const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/abc", (req, res) => {
  res.send("check ABC");
});

router.get("/tvhung", (req, res) => {
  // res.send("<h1>Trần Văn Hưng</h1>");
  res.render("sample");
});

module.exports = router; // export default
