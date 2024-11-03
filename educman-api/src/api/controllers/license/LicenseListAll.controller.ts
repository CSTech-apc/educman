import { Request, Response } from "express";

import { LicenseListAllService } from "../../../services/license/LicenseListAll.service";

class LicenseListAllController {
  async handle(req: Request, res: Response) {
    const skip = Number(req?.query?.skip) || 0;
    const take = Number(req?.query?.take) || 0;

    const licenseListAllService = new LicenseListAllService();
    const license = await licenseListAllService.execute({
      skip,
      take,
    });

    if (!license) {
      return res.status(204).json(license);
    }

    return res.status(200).json(license);
  }
}

export { LicenseListAllController };
