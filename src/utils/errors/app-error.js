class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.explanation = message;
  }
}

module.exports = AppError;

//JS gives us Error class

/* class Error {
  constructor(message) {
    this.message = message || 'Error';
    this.name = 'Error';
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error()).stack;
    }
  }
}

constructor(message): The constructor function takes an optional message parameter,
 which represents the error message. If message is not provided, a default value of 'Error' is used.

this.message: The message property holds the error message.

this.name: The name property typically holds the name of the error type.
 In the case of the Error class, it's set to 'Error'.

Error.captureStackTrace: This is a method (not present in all environments) used to capture a 
stack trace. It populates the this.stack property with a string representation of the stack trace.

this.stack: The stack property contains a string representing the stack trace. It shows the sequence 
of function calls leading up to the point where the error was constructed.

got this from chat gpt not sure about it
 */
