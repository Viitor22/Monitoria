const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createUser = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw { status: 400, message: "Preencha todos os campos" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  const savedUser = await newUser.save();
  const userObj = savedUser.toObject();
  delete userObj.password;
  return userObj;
};

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw { status: 404, message: "Usuário não encontrado" };
  }
  return user;
};

const deleteUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw { status: 404, message: "Usuário não encontrado" };
  }
  await user.deleteOne();
  return user;
};

const updateUser = async (id, { name, email, password }) => {
  let updateData = { name, email };
  if (password) {
    updateData.password = await bcrypt.hash(password, 10);
  }
  const user = await User.findByIdAndUpdate(id, updateData, { new: true });
  if (!user) {
    throw { status: 404, message: "Usuário não encontrado" };
  }
  const userObj = user.toObject();
  delete userObj.password;
  return userObj;
};

const updatePassword = async (id, password) => {
  if (!password) {
    throw { status: 400, message: "Nova senha é obrigatória" };
  }
  const user = await User.findById(id);
  if (!user) {
    throw { status: 404, message: "Usuário não encontrado" };
  }
  user.password = await bcrypt.hash(password, 10);
  await user.save();
};

const loginUser = async ({ email, password }) => {
  if (!email || !password) {
    throw { status: 400, message: "Email e senha são obrigatórios" };
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw { status: 401, message: "Credenciais inválidas" };
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw { status: 401, message: "Credenciais inválidas" };
  }
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  const userObj = user.toObject();
  delete userObj.password;
  return { user: userObj, token };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  updatePassword,
  loginUser,
};
