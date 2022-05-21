const { AsyncRouter } = require("express-async-router");
const jwt = require("jsonwebtoken");

const Sqree = require("../models/Sqree");
const {sqreeValidator} = require("../helpers/validators");
const handleValidationErrors = require("../helpers/handleValidatorErrors");
const jwtMiddleware = require("../helpers/jwtMiddleware");

const router = AsyncRouter();

router.post("/", [...sqreeValidator, handleValidationErrors, jwtMiddleware], async (req, res) => {
  const sqree = await Sqree.create(req.body.body, req.user._id);
  res.status(201).send(sqree);
});

router.delete("/:_id", [jwtMiddleware], async (req, res) => {
  const sqree = await Sqree.findById(req.params._id);

  if (sqree.user.toString() !== req.user._id.toString()) return res.status(403).send({errors: ["Invalid"]});
  
  sqree.deleted = true;
  await sqree.save();
  res.send(sqree);
});

router.get("/", async (req, res) => {
  const sqrees = await Sqree.find({ deleted: { $eq: false } },
    { user: true, createdAt: true, body: true },
    { limit: 10, sort: "-createdAt" }).populate({ path: "user" });
  res.send(sqrees);
});

module.exports = router;
