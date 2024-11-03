import {Request, Response} from "express";

import {UserListService} from "../../../services/user/UserList.services";

class UserListController {
    async handle(req: Request, res: Response) {
        const userListService = new UserListService();
        const users = await userListService.execute();

        return res.status(200).json(users);
    }
}

export {UserListController};