import * as factory from '../../utils/handlerFactory';
import Booking from './booking.model';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import Car from '../car/car.model';

export const createBooking = catchAsync(async (req, res) => {
  const doc = await Booking.create({
    ...req.body,
    user: req.user.userId,
    car: req.body.carId,
  });
  await Car.findByIdAndUpdate(req.body.carId, { status: 'unavailable' });
  await doc.populate('car user');

  res.status(httpStatus.CREATED).json({
    success: true,
    statusCode: httpStatus.CREATED,
    message: `Booking created successfully`,
    data: doc,
  });
});
export const getBooking = factory.getOne(Booking, 'user car');
export const getAllBookings = factory.getAll(Booking);
export const updateBooking = factory.updateOne(Booking);
export const deleteBooking = factory.deleteOne(Booking);
export const returnBooking = factory.updateOne(Booking);
export const getMyBookings = catchAsync(async (req, res) => {
  const doc = await Booking.find({ user: req.user.userId }).populate(
    'car user',
  );
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: `My Bookings retrieved successfully`,
    data: doc,
  });
});
