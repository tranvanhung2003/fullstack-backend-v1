const express = require("express");
// import express from "express";
const app = express(); // app express
const port = 8081; // port

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
