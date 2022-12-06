require('dotenv').config();

const express = require('express')

// App init
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Route 
app.get('/', (req, res) => {
  res.json({ mssg: "Welcome to the app" });
})

// Listening for requests
app.listen(process.env.PORT, () => {
  console.log('Listening to port', process.env.PORT);
})