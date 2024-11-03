import { Router } from "express";
const license_router = Router();

import { isAuthenticated } from "../../../middlewares/isAuthenticated";

import { LicenseCreateController } from "../../../api/controllers/license/LicenseCreate.controller";
import { LicenseCheckController } from "../../../api/controllers/license/LicenseCheck.controller";
import { LicenseListAllController } from "../../../api/controllers/license/LicenseListAll.controller";
import { LicenseListAllByFkPerStatusController } from "../../../api/controllers/license/LicenseListAllByFkPerStatus.controller";
import { LicenseListAllByFkPerStatusUnivController } from "../../../api/controllers/license/LicenseListAllByFkPerStatusUniv.controller";
import { LicenseUpdateController } from "../../../api/controllers/license/LicenseUpdate.controller";
import { LicenseRemoveController } from "../../../api/controllers/license/LicenseRemove.controller";
import { LicenseListAllByFkPerController } from "../../../api/controllers/license/LicenseListAllFkPer.controller";

license_router.get(
  "/educman/api/v1/licenses/check",
  new LicenseCheckController().handle
);

license_router.post(
  "/educman/api/v1/licenses",
  new LicenseCreateController().handle
);

license_router.get(
  "/educman/api/v1/licenses",
  new LicenseListAllController().handle
);

license_router.get(
  "/educman/api/v1/licenses/fkper",
  new LicenseListAllByFkPerController().handle
);

license_router.get(
  "/educman/api/v1/licenses/fkper-status",
  new LicenseListAllByFkPerStatusController().handle
);

license_router.get(
  "/educman/api/v1/licenses/fkper-status-university",
  new LicenseListAllByFkPerStatusUnivController().handle
);

license_router.put(
  "/educman/api/v1/licenses",
  new LicenseUpdateController().handle
);

license_router.delete(
  "/educman/api/v1/licenses",
  new LicenseRemoveController().handle
);

export { license_router };
