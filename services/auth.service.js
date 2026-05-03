const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
exports.registerUser = async ({ name, email, password }) => {

    const exists = await User.findOne({ email });
    if (exists) {
        const error = new Error("User already exists");
        error.statusCode = 400;
        throw error;
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashed,
    });

    return {
        id: user._id,
        name: user.name,
        email: user.email,
    };
};


// Login
exports.loginUser = async ({ email, password }) => {

    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("Invalid credentials");
        error.statusCode = 400;
        throw error;
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        const error = new Error("Invalid credentials");
        error.statusCode = 400;
        throw error;
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return {
        token,
    };
};