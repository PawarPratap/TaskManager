const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const taskController = require("../controllers/task.controller");
const validate = require("../middleware/validate.middleware");
const {
  createTaskSchema,
  updateTaskSchema,
  queryTaskSchema,
} = require("../validators/task.validator");


router.use(auth);

// Task routes
router
  .route("/")
  .post(validate(createTaskSchema), taskController.createTask)
  .get(validate(queryTaskSchema, "query"), taskController.getTasks);

router
  .route("/:id")
  .put(validate(updateTaskSchema), taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;