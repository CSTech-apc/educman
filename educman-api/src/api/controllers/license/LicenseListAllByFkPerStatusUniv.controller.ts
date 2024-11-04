import { Request, Response } from "express";

import { LicenseListAllByFkPerStatusUnivService } from "../../../services/license/LicenseListAllByFkPerStatusUniv.service";

class LicenseListAllByFkPerStatusUnivController {
  async handle(req: Request, res: Response) {

    const skip = Number(req?.query?.skip) || 0;
    const take = Number(req?.query?.take) || 0;
    const fkPer = req.query.fkper as string;
    const status = req.query.status as string;
    const university = req.query.university as string;

    const licenseListAllPeriodService = new LicenseListAllByFkPerStatusUnivService();

    const license = await licenseListAllPeriodService.execute({
      skip,
      take,
      fkPer,
      status,
      university,
    });

    if (!license) {
      return res.status(204).json(license);
    }

    return res.status(200).json(license);
  }
}

export { LicenseListAllByFkPerStatusUnivController };
