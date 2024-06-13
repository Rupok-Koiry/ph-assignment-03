import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

// Function to handle CastError from mongoose
const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};

export default handleCastError;
