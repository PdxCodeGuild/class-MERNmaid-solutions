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
    const post = await Post.findOne({ _id: req.params.id });
    const user = await User.findById({ _id: req.params.id})
    if (req.user._id = post._id) {
        await post.remove(); 
        
    }else if (!post) {
        res.send(404);
    }
    res.status(200).send({ post, user});
})

module.exports = router;