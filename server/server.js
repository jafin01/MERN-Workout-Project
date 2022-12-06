require("dotenv").config();
require('colors')

const express = require("express");
const connectToDb = require("./config/db");

// App init
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

connectToDb((host) => {
  console.log(`MongoDB connected to ${host}`.cyan.underline);
  listenToPort();
});

// Routes
app.use("/api/workouts", require("./routes/workouts"));


// Listening for requests
const listenToPort = () => {
  app.listen(process.env.PORT, () => {
    console.log("Listening to port", process.env.PORT);
  });
};
