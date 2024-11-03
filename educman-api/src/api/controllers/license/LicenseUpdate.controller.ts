import { Request, Response } from "express";

import { LicenseUpdateService } from "../../../services/license/LicenseUpdate.service";

import { LicenseToUpdatePkLicReq } from "../../../models/license/LicenseModels";

class LicenseUpdateController {
    async handle(req: Request, res: Response) {
        const {
            pkLic,
            university,
            nrle,
            nisr,
            initDate,
            finDate,
            status,
            fkPer,
        }: LicenseToUpdatePkLicReq = req.body;
        const licenseUpdateService = new LicenseUpdateService();
        const license = await licenseUpdateService.execute({
            pkLic,
            university,
            nrle,
            nisr,
            initDate,
            finDate,
            status,
            fkPer,
        });

        if (!license) {
            return res.status(400).json(license);
        }

        return res.status(200).json(license);
    }
}

export { LicenseUpdateController };
