import express, { json } from 'express'
import cors from 'cors'

// importing routes
const postsRoutes = require('./routes/posts')

// initialization 
const app = express()

// middlewares
app.use(json())
app.use(cors())
app.options('*', cors())

// routes
app.use(postsRoutes)

export default app
