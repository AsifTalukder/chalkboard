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
app.use(express.static("public"));

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
  const user = new User({ firstName, lastName, email, password, role });
  user.save((err) => {
    if (err) {
      if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        res.send({ message });
      }
    } else {
      res.send({ message: "sucessfull", user: user });
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
    res.send(users);
  });
});

const Course = require("./models/course");
app.post("/addNewCourse", (req, res) => {
  const {
    courseTitle,
    instructor,
    instructorEmail,
    description,
    lessonSequence,
    courseContent,
    courseInformation,
  } = req.body;

  const course = new Course({
    courseTitle,
    instructor,
    instructorEmail,
    description,
    lessonSequence,
    courseContent,
    courseInformation,
  });
  course.save((err) => {
    if (err) {
      if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        res.send({ message });
      }
    } else {
      res.send({ message: "Sucessfully Added New Course" });
    }
  });
});

app.get("/courses", (req, res) => {
  const filter = req.query.search;
  Course.find(
    { courseTitle: { $regex: filter, $options: "i" } },
    (err, courses) => {
      res.send(courses);
    }
  );
});
//findCoursesByProfessiorEmail
app.get("/findByEmail", (req, res) => {
  const filter = req.query.search;
  Course.find(
    { instructorEmail: { $regex: filter, $options: "i" } },
    (err, courses) => {
      res.send(courses);
    }
  );
});

app.get("/findAndDelete/:id", (req, res) => {
  const id = req.params;
  const title = id.id;
  // console.log(title);
  Course.findOneAndDelete({ courseTitle: title }, (err) => {
    if (err) {
      if (err.code === 11000) {
        const message = "Error Occured";
        res.send({ message });
      }
    } else {
      res.send({ message: "Sucessfull" });
    }
  });
});

const Order = require("./models/order");
app.post("/sendOrder", (req, res) => {
  // console.log(req.body);
  const {
    courseTitle,
    userEmail,
    userName,
    courseContent,
    courseInformation,
    instructorEmail,
  } = req.body;

  const order = new Order({
    courseTitle,
    userEmail,
    userName,
    courseContent,
    courseInformation,
    instructorEmail,
  });
  order.save((err) => {
    if (err) {
      if (err.code === 11000) {
        const message = "Server Side Error";
        res.send({ message });
      }
    } else {
      res.send({ message: "Course Enrollment Request Successfully Sent" });
    }
  });
});

const Enrollment = require("./models/enrollment");
app.post("/enrollment", (req, res) => {
  // console.log(req.body);
  const {
    courseTitle,
    userEmail,
    userName,
    courseContent,
    courseInformation,
    instructorEmail,
  } = req.body;

  const enrollment = new Enrollment({
    courseTitle,
    userEmail,
    userName,
    courseContent,
    courseInformation,
    instructorEmail,
  });
  enrollment.save((err) => {
    if (err) {
      if (err.code === 11000) {
        const message = "Server Side Error";
        res.send({ message });
      }
    } else {
      res.send({ message: "Successfully Accepted" });
    }
  });
});

const Assignment = require("./models/assignment");
app.post("/addAssignment", (req, res) => {
  const { course, assignment } = req.body;

  const assignmentData = new Assignment({
    course,
    assignment,
  });
  assignmentData.save((err) => {
    if (err) {
      if (err.code === 11000) {
        const message = "Server Side Error";
        res.send({ message });
      }
    } else {
      res.send({ message: "Successfully Added" });
    }
  });
});

app.get("/getOrder", (req, res) => {
  Order.find({}, (err, orders) => {
    res.send(orders);
  });
});

app.get("/getAssignment", (req, res) => {
  // let courses = ["Python", "Calculus 1"];
  Assignment.find({}, (err, assignment) => {
    res.send(assignment);
    // console.log(courses);
  });
});
app.get("/enrollmented/:email", (req, res) => {
  const email = req.params.email;
  Enrollment.find({ userEmail: email }, (err, courses) => {
    res.send(courses);
  });
});
//findByProfessorEmail
app.get("/enrollProfessior/:email", (req, res) => {
  const email = req.params.email;
  Enrollment.find({ instructorEmail: email }, (err, courses) => {
    res.send(courses);
  });
});
app.get("/enrollmented", (req, res) => {
  Enrollment.find({}, (err, courses) => {
    res.send(courses);
  });
});

app.get("/decline/:email", (req, res) => {
  const email = req.params;
  // const title = id.id;
  // console.log(email);
  Order.findOneAndDelete({ email }, (err) => {
    if (err) {
      if (err.code === 11000) {
        const message = "Error Occured";
        res.send({ message });
      }
    } else {
      res.send({ message: "Declined" });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
