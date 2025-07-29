const express = require("express");
const app = express();

// EJS
app.set("views", "./views");
app.set("view engine", "ejs");

let message = "je suis un super message";

app.get("/", (req, res) => {
  res.render("home", {
    message: message,
    monInfo: "bla bla bla",
    condition: false,
  });
});

app.listen(3333);
