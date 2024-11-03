import { Request, Response } from "express";

import { PeriodCreateService } from "../../../services/period/PeriodCreate.service";

class PeriodCreateController {
  async handle(req: Request, res: Response) {
    const { year } = req.body;
    const periodCreateService = new PeriodCreateService();
    const period = await periodCreateService.execute({ year });

    if (!period) {
      return res.status(400).json(period);
    }

    return res.status(201).json(period);
  }
}

export { PeriodCreateController };
