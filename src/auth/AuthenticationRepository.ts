import { Request, Response } from 'express';
import { prisma } from "../database/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"

interface Customer {
    username: string;
    password: string;
}

export class AuthenticationRepository {
    async login({ username, password}: Customer) {
        const customer = await prisma.customers.findFirst({
            where: {
                username
            }
        });

        if (!customer) {
            throw new Error("Username or password is incorrect");
        }

        const isValid = await compare(password, customer.password);

        if (!isValid) {
            throw new Error("Username or password is incorrect");
        }

        const token = sign({ username }, "secret", { subject: customer.id, expiresIn: "1h" });

        return token;
    }
}
