const Joi = require("joi");
const { ValidationError } = require("../../helpers/errors");

module.exports ={

      addTaskValidation: (req, res, next) => {
        const schema = Joi.object({
          title: Joi.string().required(),
          priority: Joi.string().valid("Low", "Medium", "High"),
          end: Joi.string().required(),
          start: Joi.string().required(),
          createAt: Joi.date().iso(),
          status: Joi.string().valid("To do", "In progress", "Done")
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
          next(new ValidationError(validationResult.error.details));
        }
        next();
      },
      updateTaskValidation: (req, res, next) => {
        const schema = Joi.object({
          title: Joi.string(),
          priority: Joi.string().valid("Low", "Medium", "High"),
          end: Joi.string(),
          start: Joi.string(),
          createAt: Joi.date().iso(),
          status: Joi.string()
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
          next(new ValidationError(validationResult.error.details));
        }
        next();
      },
}