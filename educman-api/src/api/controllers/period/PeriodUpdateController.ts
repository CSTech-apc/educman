import { Request, Response } from "express";

import { PeriodUpdateService } from "../../../services/period/PeriodUpdate.service";

class PeriodUpdateController {
  async handle(req: Request, res: Response) {
    const { pkPer, year } = req.body;

    const periodUpdateService = new PeriodUpdateService();
    const period = await periodUpdateService.execute({ pkPer, year });

    if (!period) {
      return res.status(204).json(period);
    }

    return res.status(200).json(period);
  }
}

export { PeriodUpdateController };
