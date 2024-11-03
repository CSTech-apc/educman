import { Request, Response } from "express";

import { PeriodDeleteService } from "../../../services/period/PeriodDelete.service";

class PeriodDeleteController {
  async handle(req: Request, res: Response) {
    try {
      const pkPer = req.query.pkper as string;

      const periodDeleteService = new PeriodDeleteService();
      const period = await periodDeleteService.execute({ pkPer });

      if (!period) {
        return res.status(204).json(period);
      }

      return res.status(200).json(period);

    } catch (error) {
      return res.status(400).json({ message: "Este registro foi deletado!" })
    }

  }
}

export { PeriodDeleteController };
