const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieparser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./user");

const app = express();
mongoose.connect("mongodb+srv://zachdev:Student12$@informance.oblcb.mongodb.net/informance?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("Mongoose is connected")
})

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

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// Routes
app.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.data.email }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User doesn't exist")
    if (doc) {
     User.findOne({ email: req.body.data.email }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(req.body.data.password, user.password, (err, result) => {
          if (err) throw err;
          if (result) {
            console.log("Successful login")
            res.send(user);
          } else {
            console.log("Unsuccessful login attempt")
            res.send(false);
          }
        })
      })
    }
  })
})

// login with passport <== can upgrade to this later

// app.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send("Can't find user");
//     else {
//       req.logIn(user, err => {
//         if (err) throw err;
//         console.log("Successfully authenticated");
//         return res.redirect('/home');
//         res.send("Successfully authenticated");
//       })
//     }
//   })(req, res, next)
// })

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.data.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Username taken")
    if (!doc) {
      const encryptedPassword = await bcrypt.hash(req.body.data.password, 10);
      const newUser = new User({
        email: req.body.data.email,
        password: encryptedPassword,
        username: req.body.data.username,
        name: req.body.data.name,
        number: req.body.data.number
      })
      await newUser.save();
      res.send("User Created!")
    }
  })
})

app.get("/user", (req, res) => {
  console.log(req.body)
})

// Start Server
app.listen(4000, () => {
  console.log("Server running")
});