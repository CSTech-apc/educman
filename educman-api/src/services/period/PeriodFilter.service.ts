import prismaClient from "../../prisma";

import { PeriodFilterReq } from "../../models/period/PeriodModels";
import moment from "moment";

class PeriodFilterService {
  async execute({ year }: PeriodFilterReq) {
    const yearFormat = moment(
      year,
      "YYYY-MM-DDT00:00:00:000Z"
    ).toISOString();

    const filter = await prismaClient.period.findMany({
      where: {
        year: yearFormat,
      },
      select: {
        pkPer: true,
        year: true,
      },
    });

    return filter;
  }
}

export { PeriodFilterService };
