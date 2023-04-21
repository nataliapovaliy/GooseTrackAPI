const Joi = require('joi');
const { ValidationError } = require('../../helpers/errors');


module.exports = {
    userInfoValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                .min(3)
                .max(30),
            phone: Joi.alternatives([Joi.string(), Joi.number()]),
            birthday: Joi.string(),
            skype: Joi.string(),
            email: Joi.string()
                .email({ maxDomainSegments: 2, tlds: { deny: ['ru'] } })
        })
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details))
        }
        next();
    }
}
