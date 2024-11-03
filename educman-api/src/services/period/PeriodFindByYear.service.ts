import prismaClient from "../../prisma";

import { PeriodFindByYearReq } from "../../models/period/PeriodModels";
import moment from "moment";

class PeriodFindByYearService {
  async execute({ year }: PeriodFindByYearReq) {
    const yearFormat = moment(
      year,
      "YYYY-MM-DDT00:00:00:000Z"
    ).toISOString();

    const find = await prismaClient.period.findFirst({
      where: {
        year: yearFormat,
      },
      select: {
        pkPer: true,
        year: true,
      },
    });

    return find;
  }
}

export { PeriodFindByYearService };
