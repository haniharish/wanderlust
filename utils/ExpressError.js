class ExpressError extends Error {
    constructor(statusCode,message) {
        super();
        
        this.statusCode = statusCode;
        this.message = message;
    }
}
module.exports = ExpressError;
// This module exports a custom error class for handling errors in Express applications.
// It extends the built-in Error class and includes a status code for HTTP responses.
// The constructor takes a message and a status code, which are passed to the parent Error class.