import { Request, Response } from "express";

import { PeriodListAllService } from "../../../services/period/PeriodListAll.service";

class PeriodListAllController {
  async handle(req: Request, res: Response) {
    const skip = Number(req?.query?.skip) || 0;
    const take = Number(req?.query?.take) || 0;

    const periodListAllService = new PeriodListAllService();
    const period = await periodListAllService.execute({
      skip,
      take,
    });

    if (!period) {
      return res.status(204).json(period);
    }

    return res.status(200).json(period);
  }
}

export { PeriodListAllController };
