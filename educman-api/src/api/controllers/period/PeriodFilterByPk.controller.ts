import { Request, Response } from "express";

import { PeriodFindByPkPerService } from "../../../services/period/PeriodfindByPkPer.service";

class PeriodFindByPkPerController {
  async handle(req: Request, res: Response) {

    const pkPer = req.query.pkper as string;
    const periodFindByPkPerService = new PeriodFindByPkPerService();

    const find = await periodFindByPkPerService.execute({
      pkPer,
    });

    if (!find) {
      return res.status(204).json(find);
    } else {
      return res.status(200).json(find);
    }

  }
}

export { PeriodFindByPkPerController };
