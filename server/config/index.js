const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5050;
const express = require("express");
const app = express();

mongoose
  .connect(
    process.env.CONNECTION_STRING
  )
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log(err);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


module.exports = app;