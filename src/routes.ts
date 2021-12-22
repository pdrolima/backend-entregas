import { Router } from 'express';
import { CustomerController  } from './customer/CustomerController';
import { AuthenticationController } from './auth/AuthenticationController';
import { DriverController } from './driver/DriverController';
import { DriverAuthenticationController } from './auth/driver/DriverAuthenticationController';

const routes = Router();

routes.post("/customer/", (new CustomerController()).create);
routes.post("/customer/login", (new AuthenticationController()).login);

routes.post("/driver/", (new DriverController()).create);
routes.post("/driver/login", (new DriverAuthenticationController()).login);

export { routes };
