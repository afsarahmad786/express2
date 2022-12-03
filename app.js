const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Hello from middleware");
  next();
});
app.use((req, res, next) => {
  res.send({ key1: "value" });
});
const server = http.createServer(app);
server.listen(3000);
