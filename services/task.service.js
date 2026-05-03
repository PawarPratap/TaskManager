const Task = require("../models/task.model");
const { TASK_STATUS, MAX_RECORD_LIMIT, DEFAULT_PAGE, DEFAULT_RECORD_LIMIT } = require("../utils/constants");

// create task
exports.createTask = async (userId, body) => {
    const { title } = body;

    if (!title) {
        const error = new Error("Title is required");
        error.statusCode = 400;
        throw error;
    }

    return await Task.create({
        title,
        user: userId,
    });
};

// get tasks with filtering, pagination, and sorting
exports.getTasks = async (userId, query) => {
    const { status, page = DEFAULT_PAGE, limit = DEFAULT_RECORD_LIMIT } = query;

    const normalizedStatus = status?.toLowerCase().trim();

    if (normalizedStatus && !TASK_STATUS.includes(normalizedStatus)) {
        const error = new Error("Invalid status filter");
        error.statusCode = 400;
        throw error;
    }

    const pageNum = Number(page);
    const limitNum = Math.min(Number(limit) || DEFAULT_RECORD_LIMIT, MAX_RECORD_LIMIT);

    const filter = { user: userId };

    if (normalizedStatus) {
        filter.status = normalizedStatus;
    }

    const skip = (pageNum - 1) * limitNum;

    const [tasks, total] = await Promise.all([
        Task.find(filter)
            .skip(skip)
            .limit(limitNum)
            .sort({ createdAt: -1 }),
        Task.countDocuments(filter),
    ]);

    return {
        total,
        page: pageNum,
        pages: Math.ceil(total / limitNum),
        data: tasks,
    };
};

// update task 
exports.updateTask = async (userId, taskId, body) => {
    const task = await Task.findOneAndUpdate(
        { _id: taskId, user: userId },
        body,
        { new: true } // return the updated document
    );

    if (!task) {
        const error = new Error("Task not found or unauthorized");
        error.statusCode = 404;
        throw error;
    }

    return task;
};

// delete task
exports.deleteTask = async (userId, taskId) => {
    const task = await Task.findOneAndDelete({
        _id: taskId,
        user: userId,
    });

    if (!task) {
        const error = new Error("Task not found or unauthorized");
        error.statusCode = 404;
        throw error;
    }

    return { message: "Task deleted" };
};