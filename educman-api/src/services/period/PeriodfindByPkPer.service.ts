import prismaClient from "../../prisma";

import { PeriodFindByPkPerReq } from "../../models/period/PeriodModels";

class PeriodFindByPkPerService {
  async execute({ pkPer }: PeriodFindByPkPerReq) {

    const find = await prismaClient.period.findFirst({
      where: {
        pkPer: pkPer,
      },
      select: {
        pkPer: true,
        year: true,
      },
    });

    return find;
  }
}

export { PeriodFindByPkPerService };
