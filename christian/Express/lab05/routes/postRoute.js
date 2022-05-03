const { Router } = require("express");
const jwtMiddleware = require("../helpers/jwtMiddleware");
const Post = require("../Models/Post");
const User = require("../Models/User");
const { check, validationResult } = require("express-validator");
const router = Router();

//Create post
router.post('/create', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.send(post);
});

//Retrieve post
router.get('/retrieve/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post) {
        res.sendStatus(404);
    } else {
        res.send(post)
    }

});

//update post
router.patch('/update/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post) {
        res.sendStatus(404);
    }
    const postInfo = req.body;
    post.set(postInfo)
    await post.save();
    res.send(post)
    

});

// Delete post 
router.delete('/delete/:id',jwtMiddleware, async (req, res) => {
    
    const post = await Post.findById({ _id: req.params.id })
    if(!post) {
        res.status(404)
    } else if (post.user !== req.user.id) {
        res.status(403)
    } else {
        await post.remove()
        res.send(post)
    }
});

//List posts
router.get("/list", async (req, res) => {
    const posts = await Post.find().populate("user");
    if(!posts){
        res.sendStatus(404);

    } else {
        res.send(posts)
    }
}) 
    
    

module.exports = router;