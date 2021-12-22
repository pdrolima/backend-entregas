import { prisma } from "../../database/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"

interface Driver {
    username: string;
    password: string;
}

export class DriverAuthenticationRepository {
    async login({ username, password}: Driver) {
        const driver = await prisma.drivers.findFirst({
            where: {
                username
            }
        });

        if (!driver) {
            throw new Error("Username or password is incorrect");
        }

        const isValid = await compare(password, driver.password);

        if (!isValid) {
            throw new Error("Username or password is incorrect");
        }

        const token = sign({ username }, "s3cr3t", { subject: driver.id, expiresIn: "1h" });

        return token;
    }
}
