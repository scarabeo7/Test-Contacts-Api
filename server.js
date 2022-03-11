const express = require("express");

const app = express();

const { contacts } = require("./contacts.json");

app.get("/", (req, res) => {
  res.send(contacts);
});

app.get("/:find", (req, res) => {
  const getParam = req.params.find.replace(/\s/g, "").toLowerCase();
  const filteredParam = contacts.filter(
    (entry) =>
      entry.accountName.replace(/\s/g, "").toLowerCase() === getParam ||
      entry.postcode.replace(/\s/g, "").toLowerCase() === getParam
  );

  filteredParam.length != 0
    ? res.send(filteredParam)
    : res
        .status(404)
        .json({ message: `${getParam} not found, please try again` });
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
