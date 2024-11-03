import { Request, Response } from "express";

import { LicenseCreateService } from "../../../services/license/LicenseCreate.service";

import { LicenseCreateReq } from "../../../models/license/LicenseModels";

class LicenseCreateController {
    async handle(req: Request, res: Response) {
        const {
            university,
            nrle,
            nisr,
            initDate,
            finDate,
            status,
            fkPer,
        }: LicenseCreateReq = req.body;
        const licenseCreateService = new LicenseCreateService();
        const license = await licenseCreateService.execute({
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

        return res.status(201).json(license);
    }
}

export { LicenseCreateController };
