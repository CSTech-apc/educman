import prismaClient from "../../prisma";

import { PeriodPagination } from "../../models/period/PeriodModels";
import moment from "moment";

class PeriodListAllService {
  async execute({ skip, take }: PeriodPagination) {

    const [periods, total] = await prismaClient.$transaction([
      prismaClient.period.findMany({
        select: {
          pkPer: true,
          year: true,
        },
        skip: skip,
        take: take,
        orderBy: {
          year: "desc"
        }
      }),
      prismaClient.period.count()
    ])

    const totalPage = Math.ceil(total / take);
    // const currentPage = Math.ceil(totalPage * skip / total)
    const currentPage = 1;

    return {
      total,
      totalPage,
      currentPage,
      periods,
    }
  }
}

export { PeriodListAllService };
