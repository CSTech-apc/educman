import prismaClient from "../../prisma";

import { sign } from "jsonwebtoken";

import { compare } from "bcryptjs";

import { UserAuthReq } from "../../models/user/UserModels";

class UserAuthService {
    async execute({ email, password }: UserAuthReq) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new Error("User not found!");
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new Error("Invalid password");
        }

        const token = sign(
            {
                name: user.name,
                surname: user.surname,
                nri: user.nri,
                email: user.email,
                profile: user.profile,
                fkPer: user.fkPer,
                fkLic: user.fkLic,
            },
            process.env.JWT_SECRET,
            {
                subject: user.pkUser,
                expiresIn: "30d",
            }
        );

        return {
            pkUser: user.pkUser,
            name: user.name,
            surname: user.surname,
            nri: user.nri,
            email: user.email,
            profile: user.profile,
            fkPer: user.fkPer,
            fkLic: user.fkLic,
            token: token,
        };
    }
}

export { UserAuthService };
