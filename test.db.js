require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB CONNECTED");
    process.exit();
  })
  .catch(err => {
    console.error("DB ERROR:", err);
  });
