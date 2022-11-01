const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home page",
    style: ["home.css", "font-style.css"],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    style: ["about.css", "font-style.css"],
    script: "front.js",
  });
});

app.get("/works", (req, res) => {
  res.render("works", {
    title: "My works",
    style: ["works.css", "font-style.css"],
  });
});

app.listen(3001, () =>
  console.log("Server is running on http://localhost:3001")
);
