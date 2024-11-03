import prismaClient from "../../prisma";

import { LicenseListAllPeriodNrleReq } from "../../models/license/LicenseModels";
import moment from "moment";

class LicenseListAllPeriodNrleService {
    async execute({ year, nrle }: LicenseListAllPeriodNrleReq) {
        const yearFormat = moment(
            year,
            "YYYY-MM-DDT00:00:00:000Z"
        ).toISOString();

        const list = await prismaClient.license.findMany({
            where: {
                period: {
                    year: yearFormat,
                },
                nrle: {
                    search: "*" + nrle + "*",
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

export { LicenseListAllPeriodNrleService };
