const { Router } = require("express");
const Post = require("../Models/Post");
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
    const postInfo = req.body;
    post.set(postInfo)
    await post.save();
    res.send(post)
    }

});

//Delete post
router.delete('/delete/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post) {
        res.send(404);
    }
    await post.remove(); 
    res.send(post)
})

modules.exports = router;