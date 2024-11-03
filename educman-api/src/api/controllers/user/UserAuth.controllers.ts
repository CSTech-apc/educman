import { Request, Response } from "express";

import { UserAuthService } from "../../../services/user/UserAuth.services";

class UserAuthController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        const userAuthService = new UserAuthService();
        const auth = await userAuthService.execute({
            email,
            password,
        });

        return res.status(200).json(auth);
    }
}

export { UserAuthController };
