const User = require('../models/User');

const createUser = async ({ name, email, password }) => {
    if (!name || !email || !password) {
        throw { status: 400, message: "Preencha todos os campos" };
    }

    const newUser = new User({ name, email, password });
    return await newUser.save();
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
    const user = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
    if (!user) {
        throw { status: 404, message: "Usuário não encontrado" };
    }
    return user;
};

const updatePassword = async (id, password) => {
    if (!password) {
        throw { status: 400, message: "Nova senha é obrigatória" };
    }

    const user = await User.findById(id);
    if (!user) {
        throw { status: 404, message: "Usuário não encontrado" };
    }

    user.password = password;
    await user.save();
};

const loginUser = async ({ email, password }) => {
    if (!email || !password) {
        throw { status: 400, message: "Email e senha são obrigatórios" };
    }

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
        throw { status: 401, message: "Credenciais inválidas" };
    }

    return user;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUser,
    updatePassword,
    loginUser
};
