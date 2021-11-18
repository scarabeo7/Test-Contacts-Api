const express = require("express");

const app = express();


//Use this array as your (in-memory) data store.
const contacts = require("./contacts.json");

app.get("/", function (req, res) {
  res.send(contacts);
});

// TODO add your routes and helper functions here

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
