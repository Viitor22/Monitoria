const UserService = require("../services/UserService");

const createUser = async (req, res, next) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json({ message: "Usuário cadastrado com sucesso", user });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await UserService.deleteUserById(req.params.id);
    res.status(200).json({ message: "Usuário deletado com sucesso", user });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.status(200).json({ message: "Usuário atualizado com sucesso", user });
  } catch (error) {
    next(error);
  }
};

const updateUserPassword = async (req, res, next) => {
  try {
    await UserService.updatePassword(req.params.id, req.body.password);
    res.status(200).json({ message: "Senha atualizada com sucesso" });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { user, token } = await UserService.loginUser(req.body);
    res.status(200).json({ message: "Login bem-sucedido", user, token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser,
  updateUserPassword,
  loginUser,
};
