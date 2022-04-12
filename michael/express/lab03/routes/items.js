const { Router } = require("express");
const Item = require("../models/Item");
const jwtMiddleware = require("../helpers/jwt.middleware");

const itemsRouter = Router();

itemsRouter.get("/", [jwtMiddleware], async (req, res) => {
	try {
		const items = await Item.find().populate("list");
		res.send(items);
	} catch (err) {
		console.log(err);
	}
});

itemsRouter.post("/", [jwtMiddleware], async (req, res) => {
	try {
		const item = await Item(req.body);
		await item.save();
		res.send(item);
	} catch (err) {
		console.log(err);
	}
});

itemsRouter.patch("/:id", [jwtMiddleware], async (req, res) => {
	try {
		const item = await Item.findByIdAndUpdate({ _id: req.params.id });
		await item.set(req.body);
		await item.save();
		res.send(item);
	} catch (err) {
		console.log(err);
	}
});

itemsRouter.delete("/:id", [jwtMiddleware], async (req, res) => {
	try {
		const item = await Item.findOne({ _id: req.params.id });
		if (!item) {
			return res.sendStatus(404);
		}
		await item.remove();
		res.send(item);
	} catch (err) {
		console.log(err);
	}
});

module.exports = itemsRouter;
