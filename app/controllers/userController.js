const userModel = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  const users = userModel.getAll();
  res.json(users);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = userModel.create({ name, email });
  res.status(201).json(newUser);
};
