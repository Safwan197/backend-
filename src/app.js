import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { use } from 'react'

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

export { app }  