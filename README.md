Solving DSA in JS
With  Built-In function and without Built-In function

Run a node server using express
Step: Npm init -> Npm install nodemon express -> npx nodemon server.js

## server.js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
