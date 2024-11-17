import { Request, Response } from "express";

import { UserCreateService } from "../../../services/user/UserCreate.services";

class UserCreateController {
    async handle(req: Request, res: Response) {
        const { name, surname, nri, profile, email, password, fkPer, fkLic } =
            req.body;
        const userCreateService = new UserCreateService();
        const user = await userCreateService.execute({
            name,
            surname,
            nri,
            profile,
            email,
            password,
            fkPer,
            fkLic,
        });

        return res.status(201).json(user);
    }
}

export { UserCreateController };
