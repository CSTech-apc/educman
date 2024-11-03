import { Request, Response } from "express";

import { PeriodCheckService } from "../../../services/period/PeriodCheck.service";

class PeriodCheckController {
  async handle(req: Request, res: Response) {
    try {
      const year = req.query.year as string;

      if (year.length === 0 || !year.trim()) {
        return res.status(400).json({ message: 'Campo PERIODO e de preenchimento obrigatorio!' })
      }

      const periodCheckService = new PeriodCheckService();
      const period = await periodCheckService.execute({ year });

      if (!period) {
        return res.status(204).end();
      }

      return res.status(200).json(period);

    } catch (error) {
      return res.status(400).json({ message: "Valores mal formatados!" });
    }

  }
}

export { PeriodCheckController };
