import { prisma } from "../database/prisma";
import { hash } from "bcrypt";

interface Driver {
    name: string,
    username: string;
    password: string;
}

export class DriverRepository {
    async createDriver({ name, username, password }: Driver) {

        const driverExists = await prisma.drivers.findFirst({
            where: {
                username
            }
        });

        if (driverExists) {
            throw new Error("Driver already exists");
        }

        const hashPassword = await hash(password, 10);

        const drivers = await prisma.drivers.create({
            data: {
                username,
                name,
                photoUrl: '',
                password: hashPassword
            },
          })

        return drivers;
    }
}
