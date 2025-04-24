const getHomepage = (req, res) => {
  // process data
  // call model
  res.send("Hello World!");
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
