import { Request, Response } from "express";

import { LicenseListAllPeriodUnivService } from "../../../services/license/LicenseListAllPeriodUniv.service";

class LicenseListAllPeriodUnivController {
    async handle(req: Request, res: Response) {
        const year = req.query.year as string;
        const university = req.query.university as string;
        const licenseListAllPeriodService =
            new LicenseListAllPeriodUnivService();
        const license = await licenseListAllPeriodService.execute({
            year,
            university,
        });

        if (!license) {
            return res.status(204).json(license);
        }

        return res.status(200).json(license);
    }
}

export { LicenseListAllPeriodUnivController };
