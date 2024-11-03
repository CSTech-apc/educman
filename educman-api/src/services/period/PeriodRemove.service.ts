import prismaClient from "../../prisma";

import { PeriodRemoveReq } from "../../models/period/PeriodModels";

class PeriodRemoveService {
  async execute({ pkPer }: PeriodRemoveReq) {
    const remove = await prismaClient.period.delete({
      where: {
        pkPer,
      },
      select: {
        pkPer: true,
        year: true,
      },
    });

    return remove;
  }
}

export { PeriodRemoveService };
