import { Request, Response } from "express";

import { PeriodRemoveService } from "../../../services/period/PeriodRemove.service";

class PeriodRemoveController {
    async handle(req: Request, res: Response) {
        const pkPer = req.query.pkPer as string;
        const periodRemoveService = new PeriodRemoveService();
        const period = await periodRemoveService.execute({ pkPer });

        if (!period) {
            return res.status(204).json(period);
        }

        return res.status(200).json(period);
    }
}

export { PeriodRemoveController };
