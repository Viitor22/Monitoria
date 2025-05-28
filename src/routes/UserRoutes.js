const express = require('express');

const router = express.Router();

const { createUser,
    getUser,
    getUserById,
    deleteUser,
    updateUser,
    updateUserPassword,
    loginUser } = require('../controllers/UserController');

router.post('/users', createUser);
router.get('/users', getUser);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);
router.patch('/users/:id', updateUser);
router.patch('/users/:id/password', updateUserPassword);
router.post('/users/login', loginUser);

module.exports = router;