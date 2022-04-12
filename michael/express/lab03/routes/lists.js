const { Router } = require("express");
const List = require("../models/List");
const jwtMiddleware = require("../helpers/jwt.middleware");

const listsRouter = Router();

listsRouter.get("/", [jwtMiddleware], async (req, res) => {
	try {
		const lists = await List.find();
		console.log(lists);
		res.send(lists);
	} catch (err) {
		console.log(err);
	}
});

listsRouter.post("/", [jwtMiddleware], async (req, res) => {
	try {
		const list = await List(req.body);
		await list.save();
		res.send(list);
	} catch (err) {
		console.log(err);
	}
});

listsRouter.patch("/:id", [jwtMiddleware], async (req, res) => {
	try {
		const list = await List.findByIdAndUpdate(req.params.id);
		await list.set(req.body);
		await list.save();
		res.send(list);
	} catch (err) {
		console.log(err);
	}
});

listsRouter.delete("/:id", [jwtMiddleware], async (req, res) => {
	try {
		const list = await List.findByIdAndDelete(req.params.id);
		if (!list) {
			return res.sendStatus(404);
		}
		await list.remove();
		res.send(list);
	} catch (err) {
		console.log(err);
	}
});

module.exports = listsRouter;
