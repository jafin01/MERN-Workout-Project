require('dotenv').config();

const express = require('express')

// App init
const app = express();

// Listening for requests
app.listen(process.env.PORT, () => {
  console.log('Listening to port', process.env.PORT);
})