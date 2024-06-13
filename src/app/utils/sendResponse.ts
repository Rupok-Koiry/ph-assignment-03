import { Response } from 'express';

// Type definition for the response structure
type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
};

// Sends a standardized JSON response.
const sendResponse = <T>(res: Response, data: TResponse<T>): void => {
  res.status(data.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
