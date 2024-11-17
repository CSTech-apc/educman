import { Request, Response } from "express";

import { UserDetailsTokenService } from "../../../services/user/UserDetailsToken.services";

class UserDetailsTokenController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const userDetailsTokenService = new UserDetailsTokenService();
        const user = await userDetailsTokenService.execute(user_id);

        return res.status(200).json(user);
    }
}

export { UserDetailsTokenController };
