const asyncHandler = require("../middleware/async.middleware");
const taskService = require("../services/task.service");

// create task
exports.createTask = asyncHandler(async (req, res) => {
  const task = await taskService.createTask(req.user.id, req.body);

  res.status(201).json({
    success: true,
    data: task,
  });
});

// get tasks with filtering, pagination, and sorting
exports.getTasks = asyncHandler(async (req, res) => {
  const result = await taskService.getTasks(req.user.id, req.query);

  res.json({
    success: true,
    ...result, // includes total, page, pages, and data
  });
});

// update task
exports.updateTask = asyncHandler(async (req, res) => {
  const task = await taskService.updateTask(
    req.user.id,
    req.params.id,
    req.body
  );

  res.json({
    success: true,
    data: task,
  });
});

// delete task
exports.deleteTask = asyncHandler(async (req, res) => {
  const result = await taskService.deleteTask(
    req.user.id,
    req.params.id
  );

  res.json({
    success: true,
    ...result, // includes message
  });
});