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

// Delete post // issue finding user
router.delete('/delete/:id',jwtMiddleware, async (req, res) => {
    console.log("first log")
    const post = await Post.findById({ _id: req.params.id });
    
    console.log(req.user, "USERRR") // user req.user
//     console.log(post, "ahhhhhhhhh")
//     console.log(user, "!!!!!!!!!!!")
//     if (!post) {
//         res.status(404).send("cannot find post")
//     } else if (post != user) {
//         res.status(403).send("unauthorized to delete post")

//     } else
//     await post.remove(); 
//     res.send(post)
//     console.log(post, "post!!!!")
//     // res.status(200).send({ post, user});
})

module.exports = router;