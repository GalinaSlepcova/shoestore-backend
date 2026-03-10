class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}


ApiError.badRequest = (message) => {
    return new ApiError(404, message)
}

ApiError.internal = (message) => {
    return new ApiError(500, message)
}

ApiError.forbidden = (message) => {
    return new ApiError(403, message)
}


module.exports = ApiError