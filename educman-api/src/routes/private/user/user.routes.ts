import { Router } from "express";
const user_router = Router();

import { isAuthenticated } from "../../../middlewares/isAuthenticated";

import { UserCreateController } from "../../../api/controllers/user/UserCreate.controllers";
import { UserAuthController } from "../../../api/controllers/user/UserAuth.controllers";
import { UserDetailsTokenController } from "../../../api/controllers/user/UserDetailsToken.controllers";
import { UserListController } from "../../../api/controllers/user/UserList.controllers";

user_router.post("/educman/api/v1/users", new UserCreateController().handle);
user_router.post("/educman/api/v1/users/auth", new UserAuthController().handle);
user_router.get(
  "/educman/api/v1/users/token",
  isAuthenticated,
  new UserDetailsTokenController().handle
);

user_router.get("/educman/api/v1/users", new UserListController().handle);

export { user_router };
