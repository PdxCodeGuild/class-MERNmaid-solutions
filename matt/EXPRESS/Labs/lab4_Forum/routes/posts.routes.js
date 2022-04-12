const { Router } = require("express")
const Post = require("../models/Post.model")

const jwtMiddleware = require("../helpers/jwtMiddleware")

const router = Router()

// List
router.get("/", async (req, res) => {
    const posts = await Post.find()
    console.log({ posts })
    res.send( { posts } )
})

// Create
router.post("/", jwtMiddleware, async (req, res) => {
    const post = new Post(req.body)
    await post.save();
    res.send(post)
})



module.exports = router;