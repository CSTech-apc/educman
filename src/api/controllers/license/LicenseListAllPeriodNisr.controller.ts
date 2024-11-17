import { Request, Response } from "express";

import { LicenseListAllPeriodNisrService } from "../../../services/license/LicenseListAllPeriodNisr.service";

class LicenseListAllPeriodNisrController {
    async handle(req: Request, res: Response) {
        const year = req.query.year as string;
        const nisr = req.query.nisr as string;
        const licenseListAllPeriodService =
            new LicenseListAllPeriodNisrService();
        const license = await licenseListAllPeriodService.execute({
            year,
            nisr,
        });

        if (!license) {
            return res.status(204).json(license);
        }

        return res.status(200).json(license);
    }
}

export { LicenseListAllPeriodNisrController };
