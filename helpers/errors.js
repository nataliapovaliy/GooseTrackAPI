class PersonalError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
        this.message = message
    }
}
class ValidationError extends PersonalError {
    constructor(message) {
        super(message);
        this.status = 400;
        this.message = message
    }
}
class WrongParamsError extends PersonalError {
    constructor(message) {
        super(message);
        this.status = 400;
        this.message = message;
    }
}
class NotFoundError extends PersonalError {
    constructor(message) {
        super(message);
        this.status = 404;
        this.message = message;
    }
}
class ConflictError extends PersonalError {
    constructor(message) {
        super(message);
        this.status = 409;
        this.message = message;

    }
}
class Unauthorized extends PersonalError {
    constructor(message) {
        super(message);
        this.status = 401;
        this.message = message;
    }
}

module.exports = {
    PersonalError,
    ValidationError,
    WrongParamsError,
    NotFoundError,
    ConflictError,
    Unauthorized
}