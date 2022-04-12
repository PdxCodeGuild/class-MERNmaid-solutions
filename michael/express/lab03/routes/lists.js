const { Router } = require("express");
const List = require("../models/List");

const listsRouter = Router();

listsRouter.get("/", async (req, res) => {
	try {
		const lists = await List.find();
		console.log(lists);
		res.send(lists);
	} catch (err) {
		console.log(err);
	}
});

listsRouter.post("/", async (req, res) => {
	try {
		const list = await List(req.body);
		await list.save();
		res.send(list);
	} catch (err) {
		console.log(err);
	}
});

listsRouter.patch("/:id", async (req, res) => {
	try {
		const list = await List.findByIdAndUpdate(req.params.id);
		await list.set(req.body);
		await list.save();
		res.send(list);
	} catch (err) {
		console.log(err);
	}
});

listsRouter.delete("/:id", async (req, res) => {
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
