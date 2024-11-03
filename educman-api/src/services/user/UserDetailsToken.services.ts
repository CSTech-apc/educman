import prismaClient from "../../prisma";

class UserDetailsTokenService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                pkUser: user_id,
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
                License: {
                    select: {
                        nrle: true,
                    },
                },
            },
        });

        return user;
    }
}

export { UserDetailsTokenService };
