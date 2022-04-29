const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

// import Post.js
const Post = require('./models/Post');

const app = express();

// Add in middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json())

// Blog post routes CRUDL
 
// Create -> Add a new blog post
app.post('/posts', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.send(post);
});

// Retreive -> Get a single blog post
app.get("/posts/:id", async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });

    // res.send(req.params.id)

    if(!post){
        res.sendStatus(404)
    } else{
        res.send(post);
    }
});

// Update -> Update a single blog post
app.patch("/posts/:id", async (req, res) => {
    console.log(req.params.id)
    const post = await Post.findOne({ _id: req.params.id })
    console.log(post)
    if (!post){
        res.send(404);
    }

    const postData = req.body;

    post.set(postData);

    await post.save();

    res.send(post);
})


// Delete -> Delete a single blog post
app.delete('/posts/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });

    if (!post) res.send(404)

    // delete post, .remove()
    await post.remove();
    res.send(post);
})

// List -> Get list of blog post
app.get("/posts", async (req, res) => {
    const posts = await Post.find();

    res.send(posts);
})

const startServer = async () => {
    await mongoose.connect("mongodb://localhost:27017/mongoose-example")
    console.log("mongodb connected")

    app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));
}

startServer();