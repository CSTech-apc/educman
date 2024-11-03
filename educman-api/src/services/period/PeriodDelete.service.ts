import prismaClient from "../../prisma";

import { PeriodDeleteReq } from "../../models/period/PeriodModels";

class PeriodDeleteService {
  async execute({ pkPer }: PeriodDeleteReq) {
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

export { PeriodDeleteService };
