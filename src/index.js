
import express from "express";
import logger from "./middleware/logger.js";
import userRoutes from "./routes/user.route.js";

const app = express();
const port = 8000;

// -----------------------------
// Middleware Setup
// -----------------------------

// Parse incoming JSON request bodies
app.use(express.json());

// Custom request logger
app.use(logger);

// -----------------------------
// Routes
// -----------------------------

// All user-related routes
app.use('/', userRoutes);

// -----------------------------
// Global Error Handler
// -----------------------------

// Handles any uncaught errors in the app
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ 
        statusCode: 500, 
        message: 'Internal Server Error' 
    });
});

// -----------------------------
// Server Start
// -----------------------------

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});