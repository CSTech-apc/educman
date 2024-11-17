import prismaClient from "../../prisma";

import { LicenseToRemoveReq } from "../../models/license/LicenseModels";
import moment from "moment";

class LicenseRemoveService {
  async execute({
    pkLic,   
  }: LicenseToRemoveReq) {
   
    const license = await prismaClient.license.delete({
      where: {
        pkLic: pkLic,
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
    });

    return {
      license,
    };
  }
}

export { LicenseRemoveService };
