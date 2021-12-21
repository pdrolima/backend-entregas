import { Router } from 'express';
import { CustomerController  } from './customer/CustomerController';
import { AuthenticationController } from './auth/AuthenticationController';

const routes = Router();

routes.post("/customer/", (new CustomerController()).create);
routes.post("/customer/login", (new AuthenticationController()).login);


export { routes };
