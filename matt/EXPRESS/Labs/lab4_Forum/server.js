const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const AuthRoutes = require("./routes/auth.routes")
const PostRoutes = require("./routes/posts.routes")
const BoardRoutes = require("./routes/board.routes")

dotenv.config();

// create express app
const app = express()

// Middleware
app.use(cors())
app.use(morgan("tiny"))
app.use(express.json()) // exact same as bodyParser


// Routes
app.use("/auth", AuthRoutes)
app.use("/api", PostRoutes)
app.use("/board", BoardRoutes)


const dbUrl = process.env.DB_URL
const port = process.env.port


const connectDB = async () => {
    try{
        await mongoose.connect(dbUrl)
        console.log("🐱‍👤 DB Connected...")
    }
    catch (err)
    {
        console.log(err)
    }
}

connectDB();

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})