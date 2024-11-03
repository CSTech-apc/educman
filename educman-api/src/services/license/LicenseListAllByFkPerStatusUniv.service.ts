import prismaClient from "../../prisma";

import { LicenseListAllByFkPerStatusUnivReq } from "../../models/license/LicenseModels";

class LicenseListAllByFkPerStatusUnivService {
  async execute({ fkPer, status, university }: LicenseListAllByFkPerStatusUnivReq) {

    const list = await prismaClient.license.findMany({
      where: {
        fkPer: fkPer,
        status: status,
        university: {
          search: "*" + university + "*",
        },
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
      orderBy: {
        initDate: "desc",
      },
    });

    return list;
  }
}

export { LicenseListAllByFkPerStatusUnivService };
