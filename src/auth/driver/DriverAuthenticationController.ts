import { DriverAuthenticationRepository } from './DriverAuthenticationRepository';
import { Request, Response } from 'express';

export class DriverAuthenticationController {

        async login(req: Request, res: Response) {
            const { username, password } = req.body;

            const create = new DriverAuthenticationRepository();
            const customer = await create.login({ username, password });

            return res.json(customer);

        }
}
