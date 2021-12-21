import { Request, Response } from 'express';
import { CustomerRepository } from './CustomerRepository';

export class CustomerController  {

    async create(req: Request, res: Response) {
        const { name, username, password } = req.body;

        const create = new CustomerRepository();
        const customer = await create.createCustomer({ name, username, password });

        return res.json(customer);

    }
}
