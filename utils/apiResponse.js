exports.success = (data) => ({
  success: true,
  data,
});

exports.error = (message) => ({
  success: false,
  message,
});