class AppError extends Error {
  public statusCode: number; // HTTP status code associated with the error

  constructor(statusCode: number, message: string, stack = '') {
    super(message);

    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor); // Capture stack trace only if stack is not provided
    }
  }
}

export default AppError;
