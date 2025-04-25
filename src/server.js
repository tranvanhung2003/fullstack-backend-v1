const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8888; // port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

configViewEngine(app);

// khai báo route
app.use("/", webRoutes);

// A simple SELECT query
connection.query("SELECT * FROM Users u;", function (err, results, fields) {
  console.log(">>> results =", results); // results contains rows returned by server
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
