"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT_NO || 3333;

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

let message = "Tickets";

app.get("/", (req, res) => {
  res.render("liste-tickets", {
    message: message,
  });
});

app.listen(port);
