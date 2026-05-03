const Joi = require("joi");
const { TASK_STATUS } = require("../utils/constants");

exports.createTaskSchema = Joi.object({
    title: Joi.string().min(2).required(),
});

exports.updateTaskSchema = Joi.object({
    title: Joi.string().min(2),
    status: Joi.string().valid(...TASK_STATUS),
});

exports.queryTaskSchema = Joi.object({
    status: Joi.string().valid(...TASK_STATUS),
    page: Joi.number().min(1),
    limit: Joi.number().min(1).max(50),
});