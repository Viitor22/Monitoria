const User = require('../models/User');

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Preencha todos os campos" });
        }

        const newUser = new User({
            name,
            email,
            password

        });

        await newUser.save();
        res.status(201).json({ message: "Usuário cadastrado com sucesso", user: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao criar memória", error });
    }

}

const getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao buscar usuário", error });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrada" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuário", error });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrada" });
        }
        res.status(200).json(user);
        await user.deleteOne();

    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuário", error });
    }
}

const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, password },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        res.status(200).json({ message: "Usuário atualizado com sucesso", user });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar usuário", error });
    }
};

const updateUserPassword = async (req, res) => {
    try {
        const { password } = req.body;
        if (!password) {
            return res.status(400).json({ message: "Nova senha é obrigatória" });
        }

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        user.password = password;
        await user.save();

        res.status(200).json({ message: "Senha atualizada com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar senha", error });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email e senha são obrigatórios" });
        }

        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }

        res.status(200).json({ message: "Login bem-sucedido", user });
    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login", error });
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
}