import { Request, Response } from "express";

import { LicenseCheckService } from "../../../services/license/LicenseCheck.service";

class LicenseCheckController {
  async handle(req: Request, res: Response) {
    const fkPer = req.query.fkPer as string;
    const nrle = req.query.nrle as string;
    const licenseCheckService = new LicenseCheckService();
    const license = await licenseCheckService.execute({
      fkPer,
      nrle,
    });

    if (!license) {
      return res.status(204).json(license);
    }

    return res.status(200).json(license);
  }
}

export { LicenseCheckController };
