import prismaClient from "../../prisma";

import { PeriodCreateReq } from "../../models/period/PeriodModels";
import moment from "moment";

class PeriodCreateService {
  async execute({ year }: PeriodCreateReq) {
    const yearFormat = moment(
      year,
      "YYYY-MM-DDT00:00:00:000Z"
    ).toISOString();

    const period = await prismaClient.period.create({
      data: {
        year: yearFormat,
      },
      select: {
        pkPer: true,
        year: true,
      },
    });

    return period;
  }
}

export { PeriodCreateService };
