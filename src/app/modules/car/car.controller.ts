import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import catchAsync from '../../utils/catchAsync';
import * as factory from '../../utils/handlerFactory';
import Booking from '../booking/booking.model';
import Car from './car.model';
import { TCar } from './car.interface';
import { TUser } from '../user/user.interface';
import { Types } from 'mongoose';

export const createCar = factory.createOne(Car);
export const getCar = factory.getOne(Car);
export const getAllCars = factory.getAll(Car);
export const updateCar = factory.updateOne(Car);
export const deleteCar = factory.deleteOne(Car);

// Helper function to convert HH:mm to decimal hours
const convertTimeToHours = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours + minutes / 60;
};

export const returnCar = catchAsync(async (req, res, next) => {
  const { bookingId, endTime } = req.body;

  // Find the booking and populate associated fields
  const booking = await Booking.findById(bookingId).populate<{
    car: TCar & { _id: Types.ObjectId };
    user: TUser;
  }>('car user');

  if (!booking) {
    return next(new AppError(httpStatus.NOT_FOUND, 'Booking not found'));
  }

  // Calculate the total cost of the booking
  const startTimeInHours = convertTimeToHours(booking.startTime);
  const endTimeInHours = convertTimeToHours(endTime);
  const duration = endTimeInHours - startTimeInHours;
  const totalCost = duration * booking.car.pricePerHour;

  // Update the car status to 'available'
  await Car.findByIdAndUpdate(booking.car._id, { status: 'available' });

  // Update the booking with total cost and end time
  booking.totalCost = totalCost;
  booking.endTime = endTime;
  await booking.save();

  // Populate the booking with the updated car details
  await booking.populate('car user');

  // Send the response
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Car returned successfully',
    data: booking,
  });
});
