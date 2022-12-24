require("dotenv").config();
require("colors");

const express = require("express");
const connectToDb = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");

// App init
const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended : false}))

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

// Error Handling
app.use(errorHandler);

// Listening for requests
const listenToPort = () => {
  app.listen(process.env.PORT, () => {
    console.log("Listening to port", process.env.PORT);
  });
};
