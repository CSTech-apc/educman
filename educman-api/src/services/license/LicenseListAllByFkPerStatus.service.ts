import prismaClient from "../../prisma";

import { LicenseListAllByFkPerStatusReq } from "../../models/license/LicenseModels";

class LicenseListAllByFkPerStatusService {
  async execute({ fkPer, status }: LicenseListAllByFkPerStatusReq) {

    const list = await prismaClient.license.findMany({
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
      orderBy: {
        initDate: "desc",
      },
    });

    return list;
  }
}

export { LicenseListAllByFkPerStatusService };
