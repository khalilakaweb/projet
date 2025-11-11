const { check, validationResult } = require("express-validator");

exports.registerValidation = () => [
  check("name", "name is required").notEmpty().trim().escape(),
  check("email", "email is required").notEmpty(),
  check("email", "email is invalid").isEmail(),
  check("password", "password must be 6-15 characters").isLength({ min: 6, max: 15 }),
  check("phone").optional().isString().withMessage("phone must be a string"),
  check("address").optional().isString().withMessage("address must be a string"),
  check("businessName").optional().isString().withMessage("businessName must be a string"),
  check("role").optional().isIn(["user","admin","vendor"]).withMessage("role must be user|admin|vendor"),
];

exports.contactValidation = () => [
  check("name", "name is required").notEmpty().trim().escape(),
  check("email", "email is required").notEmpty(),
  check("email", "email is invalid").isEmail(),
  check("subject", "subject is required").notEmpty().trim().escape(),
  check("message", "message is required").notEmpty().trim(),
];

exports.validator = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  const errors = result.array().map(e => ({ field: e.path, msg: e.msg }));
  return res.status(400).send({ errors });
};
