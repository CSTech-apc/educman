import prismaClient from "../../prisma";

import { LicenseListAllByFkPerStatusReq } from "../../models/license/LicenseModels";

class LicenseListAllByFkPerStatusService {
  async execute({ skip, take, fkPer, status }: LicenseListAllByFkPerStatusReq) {
    const [licenses, total] = await prismaClient.$transaction([
      prismaClient.license.findMany({
        where: {
          fkPer: fkPer,
          status: status,
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
          status: status,
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

export { LicenseListAllByFkPerStatusService };
