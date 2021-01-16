const express = require("express");
const app = express();

app.post("/", (req, res) => {
  console.log({req});
});

app.listen(8080, () => console.log("Listening on localhost:8080/"));

