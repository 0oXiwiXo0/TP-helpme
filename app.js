const express = require("express");
const app = express();
const port = process.env.PORT_NO || 3333;

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

let message = "je suis un super message";

app.get("/", (req, res) => {
  res.render("home", {
    message: message,
  });
});

app.listen(port);
