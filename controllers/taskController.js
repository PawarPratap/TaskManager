const Task = require("../models/taskModel");
const asyncHandler = require("../middleware/asyncHandler");

// Create Task
exports.createTask = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    const error = new Error("Title is required");
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.create({
    title: req.body.title,
    user: req.user.id,
  });

  res.status(201).json(task);
});

// Get Tasks
exports.getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// Update Task (secure)
exports.updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  // only loged in user can update his/her task
  if (!task) {
    const error = new Error("Task not found or unauthorized");
    error.statusCode = 404;
    throw error;
  }

  res.json(task);
});

// Delete Task (secure)
exports.deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });

  // only loged in user can delete his/her task
  if (!task) {
    const error = new Error("Task not found or unauthorized");
    error.statusCode = 404;
    throw error;
  }

  res.json({ message: "Task deleted" });
});