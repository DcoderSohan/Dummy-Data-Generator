const express = require("express");
const mongoose = require("mongoose");
const app = express();
const students = require("./models/students");

mongoose.connect("mongodb://127.0.0.1:27017/school");
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/generate", async (req, res) => {
  //Clear the collection students
  await students.deleteMany({});
  //Generate random data
  for (let index = 0; index < 10; index++) {
    let ranName = ["Sohan", "Amit", "Haresh", "Naresh", "Mohan"];
    let ranLang = ["HTML", "CSS", "JavaScript", "Java", "Python"];
    let ranCities = ["Ratnagiri", "Mumbai", "Pune", "Banglore", "Delhi"];

    const getRandom = (arr) => {
      let rNumber = Math.floor(Math.random() * (arr.length - 1));
      return arr[rNumber];
    };

    let s = await students.create({
      name: getRandom(ranName),
      salary: Math.floor(Math.random() * 50000),
      language: getRandom(ranLang),
      city: getRandom(ranCities),
      isManager: Math.random() > 0.5 ? true : false,
    });

    console.log(s);
  }

  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
