import prismaClient from "../../prisma";

import { LicenseCreateReq } from "../../models/license/LicenseModels";
import moment from "moment";

class LicenseCreateService {
  async execute({
    university,
    nrle,
    nisr,
    initDate,
    finDate,
    status,
    fkPer,
  }: LicenseCreateReq) {
    const initDateFormat = moment(
      initDate,
      "YYYY-MM-DDT00:00:00:000Z"
    ).toISOString();
    const finDateFormat = moment(
      finDate,
      "YYYY-MM-DDT00:00:00:000Z"
    ).toISOString();
    const license = await prismaClient.license.create({
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

    const check = await prismaClient.check.create({
      data: {
        fkLic: license.pkLic,
      },
      select: {
        fkLic: true,
        license: {
          select: {
            university: true,
          },
        },
      },
    });

    const institute = await prismaClient.institute.create({
      data: {
        fkLic: license.pkLic,
      },
      select: {
        fkLic: true,
        license: {
          select: {
            university: true,
          },
        },
      },
    });

    return {
      license,
      check,
      institute,
    };
  }
}

export { LicenseCreateService };
