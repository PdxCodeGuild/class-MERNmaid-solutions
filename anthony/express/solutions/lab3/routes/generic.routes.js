const { Router } = require("express");

// LIST
const getModel = (model, virtual) => {
  return async (req, res) => {
    const items = await model.find().populate(virtual);

    res.send(items);
  };
};

module.exports = {
  getModel,
  postModel,
  getOneModel,
  updateModel,
  deleteModel,
};
