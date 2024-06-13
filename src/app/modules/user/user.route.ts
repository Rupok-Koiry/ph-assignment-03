import express from 'express';
import auth from '../../middlewares/auth';
import { getMe } from './user.controller';

const router = express.Router();

router.get('/me', auth('user', 'admin'), getMe);

export const UserRoutes = router;
