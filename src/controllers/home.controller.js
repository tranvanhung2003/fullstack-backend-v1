const connection = require("../config/database");

const getHomepage = (req, res) => {
  // process data
  // call model
  let users = [];

  connection.query("SELECT * FROM Users u;", function (err, results, fields) {
    users = results;
    console.log(">>> results =", results); // results contains rows returned by server
    console.log(">>> check user:", users);
    res.send(JSON.stringify(users));
  });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getTvhung = (req, res) => {
  // res.send("<h1>Trần Văn Hưng</h1>");
  res.render("sample");
};

module.exports = {
  getHomepage,
  getABC,
  getTvhung,
};
