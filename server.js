const express = require("express");

const app = express();

//Use this array as your (in-memory) data store.
const { contacts } = require("./contacts.json");

app.get("/", (req, res) => {
  res.send(contacts);
});

// app.get("/find", (req, res) => {
//   const inputTerm = req.query.entry;
//   const filteredTerm = contacts.find(
//     (entry) =>
//       entry.email.toLowerCase() === inputTerm.toLowerCase() ||
//       entry.name.toLowerCase() === inputTerm.toLowerCase()
//   );
//   if (filteredTerm) {
//     res.send(filteredTerm);
//   } else {
//     res.status(404);
//   }
// });

app.get("/find", (req, res) => {
  const inputTerm = req.query.entry;
  const filteredTerm = contacts.filter((entry) => {
    return (
      entry.email.toLowerCase().includes(inputTerm.toLowerCase()) ||
      entry.name.toLowerCase().includes(inputTerm.toLowerCase())
    );
  });

  if (filteredTerm) {
    res.send(filteredTerm);
  } else {
    res.status(404);
  }
});

// TODO add your routes and helper functions here

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
