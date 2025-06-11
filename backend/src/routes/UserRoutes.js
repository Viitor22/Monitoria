const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser,
  updateUserPassword,
  loginUser,
} = require("../controllers/UserController");

const authMiddleware = require('../middleware/authMiddleware');

router.post("/users", createUser);
router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", authMiddleware, getUserById);
router.delete("/users/:id", authMiddleware, deleteUser);
router.patch("/users/:id", authMiddleware, updateUser);
router.patch("/users/:id/password", authMiddleware, updateUserPassword);

module.exports = router;