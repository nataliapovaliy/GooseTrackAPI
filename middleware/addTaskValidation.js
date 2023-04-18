const Joi = require('joi');
const { ValidationError } = require('../helpers/errors');


module.exports = {
    addTaskValidation: (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string()
                .min(3)
                .max(30),
            start: Joi.alternatives([Joi.string(), Joi.number()]),
            end: Joi.date().iso(),
            createAt: Joi.date().row,
        })
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details))
        }
        next();
    }
}
