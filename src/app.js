const express = require('express');
const cors = require('cors');

// importing routes
const routes = require('./routes/posts')

// initialization
const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.options('*', cors())

// routes
app.use(routes)


module.exports = app
