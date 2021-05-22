const express = require('express');
const cors = require('cors');

// importing routes
const postsRoutes = require('./routes/posts')

// initialization
const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.options('*', cors())

// routes
app.use(postsRoutes)


module.exports = app
