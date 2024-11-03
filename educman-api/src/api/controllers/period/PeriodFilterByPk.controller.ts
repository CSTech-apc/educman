import { Request, Response } from "express";

import { PeriodFilterByPkService } from "../../../services/period/PeriodfindByPk.service";

class PeriodFilterByPkController {
  async handle(req: Request, res: Response) {
    const pkPer = req.query.pkPer as string;
    const periodFilterByPkService = new PeriodFilterByPkService();
    const period = await periodFilterByPkService.execute({
      pkPer,
    });

    if (!period) {
      return res.status(204).json(period);
    } else {
      return res.status(200).json(period);
    }

  }
}

export { PeriodFilterByPkController };
