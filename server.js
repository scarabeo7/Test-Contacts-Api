const express = require("express");

const app = express();

//Use this array as your (in-memory) data store.
const { contacts } = require("./contacts.json");

app.get("/", (req, res) => {
  res.send(contacts);
});

app.get("/:find", (req, res) => {
  const getParam = req.params.find;
  const filteredParam = contacts.filter(
    (entry) =>
      entry.email.toLowerCase() === getParam.toLowerCase() ||
      entry.name.toLowerCase() === getParam.toLowerCase()
  );

  filteredParam
    ? res.send(filteredParam)
    : res
        .status(404)
        .json({ message: `${getParam} not found, please try again` });
});

// app.get("/find", (req, res) => {
//   const inputTerm = req.query.entry;
//   const filteredTerm = contacts.filter((entry) => {
//     return (
//       entry.email.toLowerCase().includes(inputTerm.toLowerCase()) ||
//       entry.name.toLowerCase().includes(inputTerm.toLowerCase())
//     );
//   });

//   if (filteredTerm) {
//     res.send(filteredTerm);
//   } else {
//     res.status(404);
//   }
// });

// TODO add your routes and helper functions here

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
