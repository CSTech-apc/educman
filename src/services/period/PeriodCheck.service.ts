import prismaClient from "../../prisma";

import { PeriodCheckReq } from "../../models/period/PeriodModels";
import moment from "moment";

class PeriodCheckService {
  async execute({ year }: PeriodCheckReq) {
    const yearFormat = moment(
      year,
      "YYYY-MM-DDT00:00:00:000Z"
    ).toISOString();

    const check = await prismaClient.period.findFirst({
      where: {
        year: yearFormat,
      },
      select: {
        pkPer: true,
        year: true,
      },
    });

    return check;
  }
}

export { PeriodCheckService };
