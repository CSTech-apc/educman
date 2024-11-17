import prismaClient from "../../prisma";

import { LicenseCheckReq } from "../../models/license/LicenseModels";

class LicenseCheckService {
  async execute({ fkPer, nrle }: LicenseCheckReq) {
    const check = await prismaClient.license.findFirst({
      where: {
        fkPer: fkPer,
        nrle: nrle,
      },
      select: {
        pkLic: true,
        university: true,
        nrle: true,
        nisr: true,
        period: {
          select: {
            pkPer: true,
            year: true,
          }
        }
      },
    });

    return check;
  }
}

export { LicenseCheckService };
