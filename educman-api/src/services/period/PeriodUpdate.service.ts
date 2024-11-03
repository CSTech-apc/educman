import prismaClient from "../../prisma";

import { PeriodUpdateReq } from "../../models/period/PeriodModels";
import moment from "moment";

class PeriodUpdateService {
  async execute({ pkPer, year }: PeriodUpdateReq) {
    const yearFormat = moment(
      year,
      "YYYY-MM-DDT00:00:00:000Z"
    ).toISOString();

    const period = await prismaClient.period.update({
      where: {
        pkPer,
      },
      data: {
        year: yearFormat,
      },
      select: {
        pkPer: true,
        year: true,
      }
    });

    return period;
  }
}

export { PeriodUpdateService };
