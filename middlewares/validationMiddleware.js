const Joi = require('joi');
const { ValidationError } = require('../helpers/errors');

module.exports = {
    addUserValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
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
            phone: Joi.alternatives([Joi.string(), Joi.number()]),
            birthday: Joi.date().required(),
            skype: Joi.number()
        })

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details))
        }
        next();
    },
    addSubscriptionValidation: (req, res, next) => {
        const schema = Joi.object({
            subscription: Joi.string()
                .valid("starter", "pro", "business"),
        })

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details))
        }
        next();
    },
    validationEmail: (req, res, next) => {
        const schema = Joi.object({
            email: Joi.string()
                .email({ maxDomainSegments: 2, tlds: { deny: ['ru'] } })
                .required(),
        })

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details))
        }
        next();
    }
}