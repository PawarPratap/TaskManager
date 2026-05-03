module.exports = (schema, property = "body") => (req, res, next) => {
  const { error } = schema.validate(req[property]);

  if (error) {
    const err = new Error(error.details[0].message);
    err.statusCode = 400;
    return next(err);
  }

  next();
};