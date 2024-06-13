import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import {
  getAllCars,
  createCar,
  getCar,
  updateCar,
  deleteCar,
  returnCar,
} from './car.controller';
import {
  createCarValidationSchema,
  updateCarValidationSchema,
} from './car.validation';

const router = express.Router();

router
  .route('/')
  .get(getAllCars)
  .post(auth('admin'), validateRequest(createCarValidationSchema), createCar);

router.put('/return', auth('admin'), returnCar);

router
  .route('/:id')
  .get(getCar)
  .put(auth('admin'), validateRequest(updateCarValidationSchema), updateCar)
  .delete(auth('admin'), deleteCar);

export const CarRoutes = router;
