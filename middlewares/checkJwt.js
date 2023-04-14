const jwt = require('jsonwebtoken');
const User = require('../service/schemas/user');
const HttpError = require('../utils/httpError');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const checkJwt = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new HttpError(401, 'Not authorized');            
        }

        const payload = jwt.verify(token, JWT_SECRET_KEY);

        const user = await User.findOne({ _id: payload.id });

        if (!user || !user.token) {
            throw new HttpError(401, 'Not authorized');  
        }

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }     
}

module.exports = checkJwt;