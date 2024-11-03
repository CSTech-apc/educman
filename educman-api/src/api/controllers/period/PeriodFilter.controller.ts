import { Request, Response } from "express";

import { PeriodFilterService } from "../../../services/period/PeriodFilter.service";

class PeriodFilterController {
  async handle(req: Request, res: Response) {
    const year = req.query.year as string;
    const periodFilterService = new PeriodFilterService();
    const period = await periodFilterService.execute({
      year,
    });

    if (!period) {
      return res.status(204).json(period);
    } else {
      return res.status(200).json(period);
    }

  }
}

export { PeriodFilterController };
