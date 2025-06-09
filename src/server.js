const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8888; // port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

// Kiểm tra kết nối MySQL
connection.getConnection((err, conn) => {
  if (err) {
    console.error("Lỗi kết nối đến MySQL database:", err);

    return;
  }

  console.log("Kết nối MySQL thành công!");
  conn.release(); // Trả kết nối về pool
});

configViewEngine(app);

// khai báo route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
