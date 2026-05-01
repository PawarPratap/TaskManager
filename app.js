const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorMiddleware");
const morgan = require("morgan"); // for logging
const fs = require("fs"); // for logging to file
const path = require("path"); // for constructing log file path
const limiter = require("./middleware/rateLimiter"); // for general routes
const rateLimit = require("express-rate-limit"); // for auth routes


dotenv.config(); // load env variables
connectDB();

const logStream = fs.createWriteStream(
  path.join(__dirname, "logs.txt"),
  { flags: "a" }
);

const app = express(); // initialize express framework
app.use(express.json()); // body parser
app.use(morgan("dev")); // logging
app.use(morgan("combined", { stream: logStream })); // log to file

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min window for login/registration attempts
  max: 10, // max 10 login/registration attempts
  message: "Too many login attempts",
});

// routes
app.use("/api/auth", authLimiter, require("./routes/authRoutes")); // apply rate limiter only to auth routes
app.use("/api/tasks", require("./routes/taskRoutes"));

app.use(limiter); // apply rate limiter to all other routes (general rate limiting)

// 404 handler
app.use(notFound);

// error handler (last)
app.use(errorHandler);

module.exports = app;