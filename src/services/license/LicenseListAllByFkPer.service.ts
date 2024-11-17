import prismaClient from "../../prisma";

import { LicenseListAllByFkPerReq } from "../../models/license/LicenseModels";

class LicenseListAllByFkPerService {
  async execute({ skip, take, fkPer }: LicenseListAllByFkPerReq) {
    const [licenses, total] = await prismaClient.$transaction([
      prismaClient.license.findMany({
        where: {
          fkPer: fkPer,
        },
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
            },
          },
        },
        skip: skip,
        take: take,
        orderBy: {
          initDate: "asc",
        },
      }),
      prismaClient.license.count({
        where: {
          fkPer: fkPer,
        },
      }),
    ]);

    const totalPage = Math.ceil(total / take);

    const currentPage = 1;

    return {
      total,
      totalPage,
      currentPage,
      licenses,
    };
  }
}

export { LicenseListAllByFkPerService };
