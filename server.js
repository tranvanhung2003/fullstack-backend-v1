const express = require("express");
// import express from "express";
const app = express(); // app express
const port = 8081; // port

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/tvhung", (req, res) => {
  res.send("<h1>Trần Văn Hưng</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
