import { Request, Response } from "express";

import { LicenseListAllByFkPerService } from "../../../services/license/LicenseListAllByFkPer.service";


class LicenseListAllByFkPerController {
  async handle(req: Request, res: Response) {
    const skip = Number(req?.query?.skip) || 0;
    const take = Number(req?.query?.take) || 0;
    const fkPer = req.query.fkper as string;

    const licenseListAllPeriodService =
      new LicenseListAllByFkPerService();
    const license = await licenseListAllPeriodService.execute({
      skip,
      take,
      fkPer,
    });

    if (!license) {
      return res.status(204).json(license);
    }

    return res.status(200).json(license);
  }
}

export { LicenseListAllByFkPerController };
