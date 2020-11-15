const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportlocal = require("passport-local").Strategy;
const cookieparser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cross Origin
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Express Sessions
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}))

app.use(cookieParser("secretcode"))

// Routes
app.post("/login", (req, res) => {
  console.log(req.body)
})

app.post("/register", (req, res) => {
  console.log(req.body)
})

app.get("/user", (req, res) => {
  console.log(req.body)
})

// Start Server
app.listen(4000, () => {
  console.log("Server running")
});