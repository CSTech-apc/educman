import { Request, Response } from "express";

import { LicenseRemoveService } from "../../../services/license/LicenseRemove.service";

class LicenseRemoveController {
  async handle(req: Request, res: Response) {
    const pkLic = req.query.pkLic as string;
    const licenseUpdateService = new LicenseRemoveService();
    const license = await licenseUpdateService.execute({
      pkLic,
    });

    if (!license) {
      return res.status(204).json(license);
    }

    return res.status(200).json(license);
  }
}

export { LicenseRemoveController };
