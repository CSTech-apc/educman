import prismaClient from "../../prisma";

import { hash } from "bcryptjs";

import { UserCreateReq } from "../../models/user/UserModels";

class UserCreateService {
    async execute({
        name,
        surname,
        nri,
        profile,
        email,
        password,
        fkPer,
        fkLic,
    }: UserCreateReq) {
        const hashedPassword: string = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                surname: surname,
                nri: nri,
                profile: profile,
                email: email,
                password: hashedPassword,
                fkPer: fkPer,
                fkLic: fkLic,
            },
            select: {
                pkUser: true,
                name: true,
                surname: true,
                nri: true,
                profile: true,
                email: true,
                fkPer: true,
                fkLic: true,
            },
        });

        return user;
    }
}

export { UserCreateService };
