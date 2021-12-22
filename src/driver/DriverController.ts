import { Request, Response } from 'express';
import { DriverRepository } from './DriverRepository';

export class DriverController  {

    async create(req: Request, res: Response) {
        const { name, username, password } = req.body;

        const create = new DriverRepository();
        const customer = await create.createDriver({ name, username, password });

        return res.json(customer);

    }
}
