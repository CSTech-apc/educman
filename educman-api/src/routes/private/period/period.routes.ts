import { Router } from "express";
const period_router = Router();

import { PeriodCheckController } from "../../../api/controllers/period/PeriodCheck.controller";
import { PeriodCreateController } from "../../../api/controllers/period/PeriodCreate.controller";
import { PeriodListAllController } from "../../../api/controllers/period/PeriodListAll.controller";
import { PeriodFilterController } from "../../../api/controllers/period/PeriodFilter.controller";
import { PeriodFilterByPkController } from "../../../api/controllers/period/PeriodFilterByPk.controller";
import { PeriodUpdateController } from "../../../api/controllers/period/PeriodUpdateController";
import { PeriodRemoveController } from "../../../api/controllers/period/PeriodRemove.controller";

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
  "/educman/api/v1/periods/filter",
  new PeriodFilterController().handle
);

period_router.get(
  "/educman/api/v1/periods/filter/pkper",
  new PeriodFilterByPkController().handle
);

period_router.put(
  "/educman/api/v1/periods",
  new PeriodUpdateController().handle
);

period_router.delete(
  "/educman/api/v1/periods",
  new PeriodRemoveController().handle
);

export { period_router };
