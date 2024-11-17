import prismaClient from "../../prisma";

import { LicenseListAllPeriodNisrReq } from "../../models/license/LicenseModels";
import moment from "moment";

class LicenseListAllPeriodNisrService {
    async execute({ year, nisr }: LicenseListAllPeriodNisrReq) {
        const yearFormat = moment(
            year,
            "YYYY-MM-DDT00:00:00:000Z"
        ).toISOString();

        const list = await prismaClient.license.findMany({
            where: {
                period: {
                    year: yearFormat,
                },
                nisr: {
                    search: "*" + nisr + "*",
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

export { LicenseListAllPeriodNisrService };
