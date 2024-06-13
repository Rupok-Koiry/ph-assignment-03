import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import {
  createBooking,
  deleteBooking,
  getAllBookings,
  getBooking,
  getMyBookings,
  updateBooking,
} from './booking.controller';
import {
  createBookingValidationSchema,
  updateBookingValidationSchema,
} from './booking.validation';

const router = express.Router();

router
  .route('/')
  .get(auth('admin'), getAllBookings)
  .post(
    auth('user'),
    validateRequest(createBookingValidationSchema),
    createBooking,
  );

router.get('/my-bookings', auth('user'), getMyBookings);

router
  .route('/:id')
  .get(getBooking)
  .put(
    auth('admin'),
    validateRequest(updateBookingValidationSchema),
    updateBooking,
  )
  .delete(auth('admin'), deleteBooking);

export const BookingRoutes = router;
