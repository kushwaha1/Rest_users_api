// Importing users data (stored in-memory)
import { users } from "../data/users.js";

// Calculate the next available numeric ID for a new user
let nextId = users.reduce((max, u) => Math.max(max, Number(u.id)), 0) + 1;

/**
 * All API responses follow the same format:
 * { statusCode, message, data? }
 */

// GET /users - Return all users
export function getAllUsers(req, res) {
    // If no users exist, send 404 response
    if (users.length === 0) {
        return res.status(404).json({
            statusCode: 404,
            error: "Users not found. Please create a new user."
        });
    }

    // Return all users with 200 OK status
    return res.status(200).json({
        statusCode: 200,
        message: "Users found successfully.",
        data: users
    });
}

// GET /user/:id - Return user details by ID
export function getUserByUserId(req, res) {
    const { id } = req.params;

    // Find the user with matching ID
    const user = users.find(user => user.id === Number(id));

    // If not found, send 404 response
    if (!user) {
        return res.status(404).json({
            statusCode: 404,
            error: "User not found"
        });
    }

    // Return user details with 200 OK status
    return res.status(200).json({
        statusCode: 200,
        message: "User found successfully.",
        data: user
    });
}

// POST /user - Create a new user
export function createUser(req, res) {
    const { firstName, lastName, age, hobby } = req.body;

    // Create a new user object with a unique ID
    const newUser = {
        id: Number(nextId++),
        firstName: firstName,
        lastName: lastName,
        age: age,
        hobby: hobby
    };

    // Add the new user to the in-memory users array
    users.push(newUser);

    // Return success response with 201 Created status
    return res.status(201).json({
        statusCode: 201,
        message: "User created successfully.",
        data: newUser
    });
}

// PUT /user/:id - Update existing user details
export function updateUser(req, res) {
    const { id } = req.params;
    const { firstName, lastName, age, hobby } = req.body;

    // Find index of the user to update
    const userIndex = users.findIndex(u => u.id === Number(id));

    // If user not found, send 404 response
    if (userIndex === -1) {
        return res.status(404).json({
            statusCode: 404,
            error: "User not found"
        });
    }

    // Update only the fields provided in the request
    if (firstName !== undefined) users[userIndex].firstName = firstName.trim();
    if (lastName !== undefined) users[userIndex].lastName = lastName.trim();
    if (hobby !== undefined) users[userIndex].hobby = hobby.trim();
    if (age !== undefined) users[userIndex].age = age;

    // Return updated user details with 200 OK status
    return res.status(200).json({
        statusCode: 200,
        message: "User updated successfully.",
        data: users[userIndex]
    });
}

// DELETE /user/:id - Remove a user by ID
export function deleteUser(req, res) {
    const { id } = req.params;

    // Find index of the user to delete
    const userIndex = users.findIndex(u => u.id === Number(id));

    // If user not found, send 404 response
    if (userIndex === -1) {
        return res.status(404).json({
            statusCode: 404,
            error: "User not found"
        });
    }

    // Remove the user from the array and return deleted data
    const removedUser = users.splice(userIndex, 1)[0];

    // Return success response with deleted user details
    return res.status(200).json({
        statusCode: 200,
        message: "User deleted successfully.",
        data: removedUser
    });
}