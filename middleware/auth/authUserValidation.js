const Joi = require("joi");
const { ValidationError } = require("../../helpers/errors");

module.exports = {
  registerValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      password: Joi.string()
        .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
        .min(8)
        .max(16)
        .required(),
      email: Joi.string()
        .email({ maxDomainSegments: 2, tlds: { deny: ["ru"] } })
        .required(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      next(new ValidationError(validationResult.error.details));
    }
    next();
  },
  loginValidation: (req, res, next) => {
    const schema = Joi.object({
      password: Joi.string()
        .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
        .min(8)
        .max(16)
        .required(),
      email: Joi.string()
        .email({ maxDomainSegments: 2, tlds: { deny: ["ru"] } })
        .required(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      next(new ValidationError(validationResult.error.details));
    }
    next();
  },



};
