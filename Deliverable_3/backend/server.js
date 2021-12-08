const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))


//MongoDB databse setup with mongoose
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err.message));
  
app.post("/signup", (req, res) => {
  // console.log(req.body);
  const { firstName, lastName, email, password, role } = req.body;
  // console.log("Working")
  const user = new User({ firstName, lastName, email, password, role});
  user.save((err) => {
    if (err) {
     if(err.code === 11000){
       const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
       res.send({message});
     }
    } else {
      res.send({ message: "sucessfull" , user: user});
    }
  });
});

//login system
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  User.findOne({ email: email }, (err, user) => {
    if (!user) {
      res.send({ message: "Sorry You are not a user" });
    } else {
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          res.send({ message: "Login Succes", user: user });
        } else {
          res.send({ message: "Wrong Credentials" });
        }
      });
    }
  });
});

app.get("/students", (req, res) => {
  User.find({}, (err, users) => {
    res.send(users)
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
