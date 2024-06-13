import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { CarRoutes } from '../modules/car/car.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BookingRoutes } from '../modules/booking/booking.routes';

const router = Router();

// Define the routes for each module
const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/cars',
    route: CarRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
];

// Register each module route with the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
