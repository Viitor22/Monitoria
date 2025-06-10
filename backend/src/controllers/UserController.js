const UserService = require('../services/UserService');

const createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json({ message: "Usuário cadastrado com sucesso", user });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Erro ao criar usuário" });
    }
};

const getUser = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuários", error });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await UserService.deleteUserById(req.params.id);
        res.status(200).json({ message: "Usuário deletado com sucesso", user });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body);
        res.status(200).json({ message: "Usuário atualizado com sucesso", user });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const updateUserPassword = async (req, res) => {
    try {
        await UserService.updatePassword(req.params.id, req.body.password);
        res.status(200).json({ message: "Senha atualizada com sucesso" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await UserService.loginUser(req.body);
        res.status(200).json({ message: "Login bem-sucedido", user });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getUser,
    getUserById,
    deleteUser,
    updateUser,
    updateUserPassword,
    loginUser
};
