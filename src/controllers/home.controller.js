const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home");
};

const getABC = (req, res) => {
  return res.send("check ABC");
};

const getTvhung = (req, res) => {
  // res.send("<h1>Trần Văn Hưng</h1>");
  return res.render("sample");
};

module.exports = {
  getHomepage,
  getABC,
  getTvhung,
};
