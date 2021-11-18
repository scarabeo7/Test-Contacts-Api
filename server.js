const express = require("express");

const app = express();

//Use this array as your (in-memory) data store.
const { contacts } = require("./contacts.json");

app.get("/", (req, res) => {
  res.send(contacts);
});

app.get("/find", (req, res) => {
  const inputEmail = req.query.email;
  console.log(inputEmail)
  const filteredEmail = contacts.find((entry) => entry.email === inputEmail);
  console.log(filteredEmail)
  res.send(filteredEmail);
});

// TODO add your routes and helper functions here

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
