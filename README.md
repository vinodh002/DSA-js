# Solving DSA in JS
 =====================

This repository contains solutions to various Data Structures and Algorithms (DSA) problems in JavaScript. The solutions are implemented with and without using built-in functions.

## Table of Contents
-----------------

* [Getting Started](#getting-started)
* [Running the Node Server](#running-the-node-server)
* [DSA Solutions](#dsa-solutions)

## Getting Started
---------------

To get started, follow these steps:

### Step 1: Initialize the Project

Run the following command to initialize the project:
```bash
npm init
npm install nodemon express
npx nodemon server.js

-----------------
### server.js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
