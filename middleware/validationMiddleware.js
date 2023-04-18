const Joi = require('joi');
const { ValidationError } = require('../helpers/errors');


module.exports = {
    registerValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                .min(3)
                .max(30)
                .required(),
            password: Joi.string()
                .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
                .min(8)
                .max(16)
                .required(),
            email: Joi.string()
                .email({ maxDomainSegments: 2, tlds: { deny: ['ru'] } })
                .required(),

        })

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details))
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
                .email({ maxDomainSegments: 2, tlds: { deny: ['ru'] } })
                .required(),
        })
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details))
        }
        next();
    },

    addTaskValidation: (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string()
                .required(),
            priority: Joi.string()
                .valid("Low", "Medium", "Hight"),
            end: Joi.string()
                .required(),
            start: Joi.string()
                .required(),
            createAt: Joi.date().iso(),

        })
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details))
        }
        next();
    },
    updateTaskValidation: (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string(),
            priority: Joi.string()
                .valid("Low", "Medium", "Hight"),
            end: Joi.string(),
            start: Joi.string(),
            createAt: Joi.string()

        })
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details))
        }
        next();
    },


}