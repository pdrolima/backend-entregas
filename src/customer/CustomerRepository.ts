import { prisma } from "../database/prisma";
import { hash } from "bcrypt";

interface Customer {
    name: string,
    username: string;
    password: string;
}

export class CustomerRepository {
    async createCustomer({ name, username, password }: Customer) {

        const customerExists = await prisma.customers.findFirst({
            where: {
                username
            }
        });

        if (customerExists) {
            throw new Error("Username already exists");
        }

        const hashPassword = await hash(password, 10);

        const customer = await prisma.customers.create({
            data: {
                username,
                name,
                password: hashPassword
            },
          })

        return customer;
    }
}
