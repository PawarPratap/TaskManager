const asyncHandler = require("../middleware/async.middleware");
const authService = require("../services/auth.service");

// Register
exports.register = asyncHandler(async (req, res) => {
  const user = await authService.registerUser(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

// Login
exports.login = asyncHandler(async (req, res) => {
  const result = await authService.loginUser(req.body);

  res.json({
    success: true,
    ...result,
  });
});