const { Router } = require("express");
const Board = require("../Models/Board");

const router = Router();

//Create board
router.post('/create', async (req, res) => {
    const board = new Board(req.body);
    await board.save();
    res.send(board);
});

//Retrieve board
router.get('/retrieve/:id', async (req, res) => {
    const board = await Board.findOne({ _id: req.params.id });
    if (!board) {
        res.sendStatus(404);
    } else {
        res.send(board)
    }

});

//update board
router.patch('/update/:id', async (req, res) => {
    const board = await Board.findOne({ _id: req.params.id });
    if (!board) {
        res.sendStatus(404);
    const postInfo = req.body;
    board.set(postInfo)
    await board.save();
    res.send(board)
    }

});

//Delete board
router.delete('/delete/:id', async (req, res) => {
    const board = await Board.findOne({ _id: req.params.id });
    if (!board) {
        res.send(404);
    }
    await board.remove(); 
    res.send(board)
})

//List board
router.get("/list", async (req, res) => {
    const posts = await Posts.find().populate("posts");
    res.send(posts);
  });

  module.exports = router;
  