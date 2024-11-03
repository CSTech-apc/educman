import prismaClient from "../../prisma";

import { PeriodFilterByPkReq } from "../../models/period/PeriodModels";

class PeriodFilterByPkService {
  async execute({ pkPer }: PeriodFilterByPkReq) {

    const filter = await prismaClient.period.findFirst({
      where: {
        pkPer: pkPer,
      },
      select: {
        pkPer: true,
        year: true,
      },
    });

    return filter;
  }
}

export { PeriodFilterByPkService };
