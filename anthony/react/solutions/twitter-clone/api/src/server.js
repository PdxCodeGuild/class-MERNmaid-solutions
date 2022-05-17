const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")

// import routes
const authRoutes = require("./routes/auth.routes")

// Initialize dotenv
const envPath = path.resolve(__dirname, "../../.env")
dotenv.config({
  path: envPath
});


// Initialize express app
const app = express()

// Middleware
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)

// Connect to Database
const connectDatabase = async (dbName = process.env.DB_NAME) => {
  const connection = await mongoose.connect(`mongodb://localhost/${dbName}`)
  if (process.env.ENV !== "test") {
    console.log(`🧜‍ Connected to mongodb://localhost/${dbName}`)
  }
  return connection
}

// Start server
const startServer = () => {
  app.listen(process.env.API_PORT, async () => {
    await connectDatabase()
    if (process.env.ENV !== "test") {
      console.log(`🚀 Server listening on http://localhost:${process.env.API_PORT}`)
    }
  })
}

module.exports = {
  app,
  connectDatabase,
  startServer
}