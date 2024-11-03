import { Request, Response } from "express";

import { LicenseListAllByFkPerStatusService } from "../../../services/license/LicenseListAllByFkPerStatus.service";

class LicenseListAllByFkPerStatusController {
  async handle(req: Request, res: Response) {

    const fkPer = req.query.fkper as string;
    const status = req.query.status as string;

    const licenseListAllPeriodService = new LicenseListAllByFkPerStatusService();

    const license = await licenseListAllPeriodService.execute({
      fkPer,
      status,
    });

    if (!license) {
      return res.status(204).json(license);
    }

    return res.status(200).json(license);
  }
}

export { LicenseListAllByFkPerStatusController };
