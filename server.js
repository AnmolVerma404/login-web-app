const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false })); //We will use this as the information will be coming through form, therefor now we can access the name, email and password inside the server

let users = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Anmol" });
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login", (req, res) => {});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(users);
});

app.listen(3000);
