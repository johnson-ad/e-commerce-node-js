const express = require("express")
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv").config()

// Connection wicth  mongoDB
connectDb()

const app = express()
app.use(express.json())
const port = process.env.PORT || 5001


//La gestion des error
//app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})