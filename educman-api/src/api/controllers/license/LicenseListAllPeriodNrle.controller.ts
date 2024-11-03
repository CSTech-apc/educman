import { Request, Response } from "express";

import { LicenseListAllPeriodNrleService } from "../../../services/license/LicenseListAllPeriodNrle.service";

class LicenseListAllPeriodNrleController {
    async handle(req: Request, res: Response) {
        const year = req.query.year as string;
        const nrle = req.query.nrle as string;
        const licenseListAllPeriodService =
            new LicenseListAllPeriodNrleService();
        const license = await licenseListAllPeriodService.execute({
            year,
            nrle,
        });

        if (!license) {
            return res.status(204).json(license);
        }

        return res.status(200).json(license);
    }
}

export { LicenseListAllPeriodNrleController };
