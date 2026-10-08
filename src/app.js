import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))

// Used for URL Encoding
app.use(express.urlencoded({
    extended: true,   // Objects can be defined within an Object (Extended)
    limit : "16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())

// routes

import userRouter from './routes/user.routes.js'


// routes declaration

app.use("/api/v1/users", userRouter)
// https://localhost:8000/api/v1/users/register     


export { app }  