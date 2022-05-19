const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
const morgan = require("morgan")

const authRoutes = require("./routes/auth.routes")
const squawkRoutes = require("./routes/squawk.routes")

// Initialize dotenv
const envPath = path.resolve(__dirname, "../../.env")
dotenv.config({
    path: envPath
})
console.log(process.env.ENV)

//Initialize express app
const app = express()

//Middleware
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/squawk", squawkRoutes )

//Connect to DB
const connectDatabase = async (dbName=process.env.DB_NAME) => {
    const connection = await mongoose.connect(`mongodb://localhost/${dbName}`)
    if(process.ENV !== "test")  {
    console.log(`😮Connected to mongodb://localhost/${dbName}`)
    }
    return connection

}

//Start server
const startServer = () => {
    app.listen(process.env.API_PORT, async () => {
        await connectDatabase()
        if (process.env.ENV !== "test"){
            console.log(`🤣Server listening on http://localhost:${process.env.API_PORT}`)
        }
    })
}

module.exports = {
    app,
    connectDatabase,
    startServer
}
