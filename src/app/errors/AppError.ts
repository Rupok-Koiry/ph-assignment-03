class AppError extends Error {
  // HTTP status code associated with the error
  public statusCode: number;
  constructor(statusCode: number, message: string, stack = '') {
    super(message);

    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      // Capture stack trace only if stack is not provided
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
