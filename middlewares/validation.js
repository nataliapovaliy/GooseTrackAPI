const Joi = require("joi");

const validateContacts = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).optional(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).optional(),
        phone: Joi.string().optional()
    })

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).json({status: validationResult.error})
    }

    next();
}

const validateUser = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
            .required(),
        password: Joi.string().min(6).required(),
        subscription: Joi.string().valid('starter', 'pro', 'business')
    })

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).json({status: validationResult.error})
    }

    next();
}

const validateEmail = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
            .required(),
    })
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).json({status: validationResult.error})
    }
    next();
}

module.exports = {
    validateContacts,
    validateUser,
    validateEmail
}