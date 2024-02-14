// const express = require('express');
// const app = express();
// const port = 3001;
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

// app.listen(port, () => {
//   console.log(`Listening to port ${port}`);
// })



// const dotenv = require('dotenv')
const app = require('./app')

const port = 3001;
// const port = process.env.PORT
const server = app.listen(port, () => {
  console.log("welcome to the server",port)
})