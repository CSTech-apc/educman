import { Request, Response } from "express";

import { PeriodCheckService } from "../../../services/period/PeriodCheck.service";

class PeriodCheckController {
  async handle(req: Request, res: Response) {
    const year = req.query.year as string;
    const periodCheckService = new PeriodCheckService();
    const period = await periodCheckService.execute({ year });

    if (!period) {
      return res.status(204).json(period);
    }

    return res.status(200).json(period);
  }
}

export { PeriodCheckController };
