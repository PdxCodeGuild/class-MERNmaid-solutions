const { Router } = require("express");
const jwtMiddleware = require("../helpers/jwtMiddleware");
const Board = require("../Models/Board");
const { check, validationResult } = require("express-validator");
const Post = require("../Models/Post")
const User = require("../Models/User")

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
    }
    const boardInfo = req.body;
    board.set(boardInfo)
    await board.save();
    res.send(board)
    

});

//Delete board
router.delete('/delete/:id', jwtMiddleware, async (req, res) => {
    const board = await Board.findOne({ _id: req.params.id });
    const user = await User.find({ user: user._id });
    if (!board) {
        res.send(404);
    } else if (!user){
        res.send(404)
    } else
    await board.remove(); 
    res.send(board)
})

//List board
router.get("/list", async (req, res) => {
    const boards = await Board.find().populate("posts");
    res.send(boards);
});

  
  

  module.exports = router;
  