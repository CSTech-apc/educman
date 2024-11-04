import prismaClient from "../../prisma";

import { LicenseListAllByFkPerStatusUnivReq } from "../../models/license/LicenseModels";

class LicenseListAllByFkPerStatusUnivService {
  async execute({ skip, take, fkPer, status, university }: LicenseListAllByFkPerStatusUnivReq) {
    const [licenses, total] = await prismaClient.$transaction([
      prismaClient.license.findMany({
        where: {
          fkPer: fkPer,
          status: status,
          university: {
            search: "*" + university + "*",
          }
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
          university: {
            search: "*" + university + "*",
          },
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

export { LicenseListAllByFkPerStatusUnivService };
