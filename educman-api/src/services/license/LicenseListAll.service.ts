import prismaClient from "../../prisma";

import { LicensePagination } from "../../models/license/LicenseModels";

class LicenseListAllService {
  async execute({ skip, take }: LicensePagination) {

    const [licenses, total] = await prismaClient.$transaction([
      prismaClient.license.findMany({
        select: {
          pkLic: true,
          university: true,
          nrle: true,
          nisr: true,
          initDate: true,
          finDate: true,
          status: true,
          period: {
            select: {
              year: true,
            }
          },
        },
        skip: skip,
        take: take,
        orderBy: {
          initDate: "asc"
        }
      }),
      prismaClient.license.count()
    ])

    const totalPage = Math.ceil(total / take);
    const currentPage = 1;

    return {
      total,
      totalPage,
      currentPage,
      licenses,
    }
  }
}

export { LicenseListAllService };
