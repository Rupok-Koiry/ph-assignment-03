import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { signin, signup } from './auth.controller';
import {
  signInValidationSchema,
  signUpValidationSchema,
} from './auth.validation';

const router = express.Router();

// Define routes for signup and signin
router.post('/signup', validateRequest(signUpValidationSchema), signup);
router.post('/signin', validateRequest(signInValidationSchema), signin);

export const AuthRoutes = router;
