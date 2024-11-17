import { Router } from "express";
const period_router = Router();

import { PeriodCheckController } from "../../../api/controllers/period/PeriodCheck.controller";
import { PeriodCreateController } from "../../../api/controllers/period/PeriodCreate.controller";
import { PeriodListAllController } from "../../../api/controllers/period/PeriodListAll.controller";
import { PeriodFindByYearController } from "../../../api/controllers/period/PeriodFilter.controller";
import { PeriodFindByPkPerController } from "../../../api/controllers/period/PeriodFilterByPk.controller";
import { PeriodUpdateController } from "../../../api/controllers/period/PeriodUpdateController";
import { PeriodDeleteController } from "../../../api/controllers/period/PeriodDelete.controller";

period_router.get(
  "/educman/api/v1/periods/check",
  new PeriodCheckController().handle
);

period_router.post(
  "/educman/api/v1/periods",
  new PeriodCreateController().handle
);

period_router.get(
  "/educman/api/v1/periods",
  new PeriodListAllController().handle
);

period_router.get(
  "/educman/api/v1/periods/find/year",
  new PeriodFindByYearController().handle
);

period_router.get(
  "/educman/api/v1/periods/find/pkper",
  new PeriodFindByPkPerController().handle
);

period_router.put(
  "/educman/api/v1/periods",
  new PeriodUpdateController().handle
);

period_router.delete(
  "/educman/api/v1/periods",
  new PeriodDeleteController().handle
);

export { period_router };
