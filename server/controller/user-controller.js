import User from "../models/user-schema.js";

export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editUser = async (req, res) => {
  const user = req.body;
  const edituser = User(user);
  try {
    await User.updateOne({ _id: req.params.id }, edituser);
    res.status(201).json(edituser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteUserone = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User is deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
