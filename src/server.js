const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express(); // app express
const port = process.env.PORT || 8888; // port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config static files
app.use(express.static(path.join(__dirname, "public")));

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/tvhung", (req, res) => {
  // res.send("<h1>Trần Văn Hưng</h1>");
  res.render("sample");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
