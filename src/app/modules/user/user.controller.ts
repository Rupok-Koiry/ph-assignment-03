import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import User from './user.model';

export const getMe = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const user = await User.findById(userId);
  sendResponse(res, {
    data: user,
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
  });
});
