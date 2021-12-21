import { AuthenticationRepository } from './AuthenticationRepository';
import { Request, Response } from 'express';

export class AuthenticationController {

        async login(req: Request, res: Response) {
            const { username, password } = req.body;

            const create = new AuthenticationRepository();
            const customer = await create.login({ username, password });

            return res.json(customer);

        }
}
