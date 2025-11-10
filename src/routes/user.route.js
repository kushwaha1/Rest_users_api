import express from "express";
import validateUser from "../middleware/validateUser.js";
import { createUser, deleteUser, getAllUsers, getUserByUserId, updateUser } from "../controller/user.controller.js";
const router = express.Router();

// -----------------------------
// User Routes
// -----------------------------

// GET /users - Fetch all users
router.get('/users', getAllUsers);

// GET /users/:id - Fetch a specific user by ID
router.get('/users/:id', getUserByUserId);

// POST /user - Create a new user (with validation)
router.post('/user', validateUser, createUser);

// PUT /user/:id - Update an existing user (with validation)
router.put('/user/:id', validateUser, updateUser);

// DELETE /user/:id - Delete a user by ID
router.delete('/user/:id', deleteUser);

// Export the router to be used in index.js
export default router;