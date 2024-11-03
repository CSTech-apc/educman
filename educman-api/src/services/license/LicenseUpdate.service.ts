import prismaClient from "../../prisma";

import { LicenseToUpdatePkLicReq } from "../../models/license/LicenseModels";
import moment from "moment";

class LicenseUpdateService {
  async execute({
    pkLic,
    university,
    nrle,
    nisr,
    initDate,
    finDate,
    status,
    fkPer,
  }: LicenseToUpdatePkLicReq) {
    const initDateFormat = moment(
      initDate,
      "YYYY-MM-DDT00:00:00:000Z"
    ).toISOString();
    const finDateFormat = moment(
      finDate,
      "YYYY-MM-DDT00:00:00:000Z"
    ).toISOString();
    const license = await prismaClient.license.update({
      where: {
        pkLic: pkLic,
      },
      data: {
        university: university,
        nrle: nrle,
        nisr: nisr,
        initDate: initDateFormat,
        finDate: finDateFormat,
        status: status,
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
    });

    return {
      license,
    };
  }
}

export { LicenseUpdateService };
