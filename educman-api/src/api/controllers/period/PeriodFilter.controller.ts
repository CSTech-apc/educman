import { Request, Response } from "express";

import { PeriodFindByYearService } from "../../../services/period/PeriodFindByYear.service";

class PeriodFindByYearController {
  async handle(req: Request, res: Response) {

    const year = req.query.year as string;

    const periodFindByYearService = new PeriodFindByYearService();
    const find = await periodFindByYearService.execute({
      year,
    });

    if (!find) {
      return res.status(204).json(find);
    } else {
      return res.status(200).json(find);
    }

  }
}

export { PeriodFindByYearController };
