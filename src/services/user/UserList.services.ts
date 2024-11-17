import prismaClient from "../../prisma";

class UserListService {
  async execute() {
    const [users] = await Promise.all([
      prismaClient.user.findMany({
        select: {
          name: true,
          surname: true,
          nri: true,
          profile: true,
          email: true,
        },
      }),
    ]);

    return users;
  }
}

export { UserListService };
